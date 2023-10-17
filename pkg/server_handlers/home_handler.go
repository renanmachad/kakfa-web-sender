package server_handlers

import (
	"html/template"
	"net/http"
)

func Home(w http.ResponseWriter, r *http.Request) {

	tmpl := template.Must(template.ParseFiles("C:\\Users\\renan\\GolandProjects\\kafka-producer-ui\\static\\index.html"))
	err := tmpl.Execute(w, nil)

	if err != nil {
		panic(err)
	}

}
