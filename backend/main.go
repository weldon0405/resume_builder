package main

import (
	"database/sql"
	"log"
	"net/http"

	// "encoding/json"
	"os"

	_ "github.com/lib/pq"
)

type App struct {
	DB *sql.DB
}

func main() {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// create table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL)")
	if err != nil {
		log.Fatal(err)
	}

	// create router
	mux := http.NewServeMux()
	mux.HandleFunc("GET /{$}", home)
}
