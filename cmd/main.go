package main

import (
	"fmt"
	"kakfa-web-sender/pkg/server_handlers"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Running server at: http://localhost:8086")

	// define handlers
	http.HandleFunc("/", server_handlers.Home)

	log.Fatal(http.ListenAndServe(":8086", nil))

}
