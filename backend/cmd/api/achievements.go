package main

import (
	"fmt"
	"net/http"
)

// createAchievementHandler creates a new achievement
// API route: POST /v1/achievements
func (app *application) createAchievementHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "create an achievement")
}

// getAchievementsHandler retrieves all achievements
// API route: GET /v1/achievements
func (app *application) getAchievementsHandler(w http.ResponseWriter, r *http.Request) {
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}

	fmt.Fprintf(w, "show the details for achievement %d\n", id)
}
