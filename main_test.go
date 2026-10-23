package main

import (
	"net/http/httptest"
	"strings"
	"testing"
)

func TestRoutes(t *testing.T) {
	for _, tc := range []struct {
		path, body, contentType string
		status                  int
	}{
		{"/", "Lead with confidence.", "text/html", 200},
		{"/app.js", "function loadMap", "javascript", 200},
		{"/maps.js", "stratholme-main-gate", "javascript", 200},
		{"/stratholme-main-gate.png", "\x89PNG\r\n\x1a\n", "image/png", 200},
		{"/style.css", "color-scheme:dark", "text/css", 200},
		{"/stratholme-service-entrance.png", "\x89PNG\r\n\x1a\n", "image/png", 200},
		{"/healthz", "ok\n", "text/plain", 200},
		{"/missing", "404 page not found", "text/plain", 404},
	} {
		t.Run(tc.path, func(t *testing.T) {
			w := httptest.NewRecorder()
			handler().ServeHTTP(w, httptest.NewRequest("GET", tc.path, nil))
			if w.Code != tc.status || !strings.Contains(w.Body.String(), tc.body) || !strings.Contains(w.Header().Get("Content-Type"), tc.contentType) {
				t.Fatalf("unexpected response: status=%d content-type=%s body=%s", w.Code, w.Header().Get("Content-Type"), w.Body.String())
			}
		})
	}
}

func TestExpandedMapArtwork(t *testing.T) {
	for _, name := range []string{
		"blackrock-depths-1.jpg", "blackrock-depths-2.jpg",
		"blackrock-spire-1.jpg", "blackrock-spire-2.jpg", "blackrock-spire-3.jpg", "blackrock-spire-4.jpg",
		"blackrock-spire-5.jpg", "blackrock-spire-6.jpg", "blackrock-spire-7.jpg",
		"scholomance-1.jpg", "scholomance-2.jpg", "scholomance-3.jpg", "scholomance-4.jpg",
		"dire-maul-east-upper.jpg", "dire-maul-east-lower.jpg", "dire-maul-north.jpg",
		"dire-maul-west-gardens.jpg", "dire-maul-west-balcony.jpg", "dire-maul-west-prison.jpg",
	} {
		t.Run(name, func(t *testing.T) {
			w := httptest.NewRecorder()
			handler().ServeHTTP(w, httptest.NewRequest("GET", "/"+name, nil))
			if w.Code != 200 || !strings.HasPrefix(w.Header().Get("Content-Type"), "image/") || w.Body.Len() < 1000 {
				t.Fatalf("map artwork unavailable: status=%d type=%s bytes=%d", w.Code, w.Header().Get("Content-Type"), w.Body.Len())
			}
		})
	}
}
