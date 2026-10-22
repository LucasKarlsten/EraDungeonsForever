package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
	"time"
)

//go:embed web/*
var assets embed.FS

func handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("ok\n"))
	})
	mux.Handle("GET /", http.FileServerFS(mustSub()))
	return mux
}

func mustSub() fs.FS {
	f, err := fs.Sub(assets, "web")
	if err != nil {
		panic(err)
	}
	return f
}
func main() {
	addr := os.Getenv("ADDR")
	if addr == "" {
		addr = "127.0.0.1:8080"
	}
	log.Printf("Dungeon guide listening on %s", addr)
	s := &http.Server{Addr: addr, Handler: handler(), ReadHeaderTimeout: 5 * time.Second}
	log.Fatal(s.ListenAndServe())
}
