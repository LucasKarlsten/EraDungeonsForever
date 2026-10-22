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
