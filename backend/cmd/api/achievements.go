package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/weldon0405/resume_builder/internal/data"
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

	achievement := data.Achievement{
		ID:          id,
		CreatedAt:   time.Now(),
		PositionID:  1,
		UserID:      1,
		Description: "Led cross-functional team of 8 engineers to deliver a new product feature that increased user engagement by 25%. Coordinated development efforts across frontend, backend, and QA teams to ensure on-time delivery and high-quality implementation.",
		Skills:      []string{"leadership", "software development", "product management"},
	}

	err = app.writeJSON(w, http.StatusOK, achievement, nil)
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "The server encountered a problem and could not process you request", http.StatusInternalServerError)
	}
}
