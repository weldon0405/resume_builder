package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/weldon0405/resume_builder/internal/data"
	"github.com/weldon0405/resume_builder/internal/validator"
)

// createAchievementHandler creates a new achievement
// API route: POST /v1/achievements
func (app *application) createAchievementHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		ID          int64     `json:"id"`
		LastUpdated time.Time `json:"last_updated"`
		PositionID  int64     `json:"position_id"`
		UserID      int64     `json:"user_id"`
		Description string    `json:"description"`
		Skills      []string  `json:"skills,omitzero"`
	}

	err := app.readJSON(w, r, &input)
	if err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	v := validator.New()

	v.Check(input.Description != "", "description", "must be provided")
	v.Check(input.PositionID > 0, "position_id", "must associate with a position")
	v.Check(input.Skills != nil, "skills", "must be provided")
	v.Check(validator.Unique(input.Skills), "skills", "must not contain duplicate values")

	if !v.Valid() {
		app.failedValidationResponse(w, r, v.Errors)
		return
	}

	fmt.Fprintf(w, "%+v\n", input)
}

// getAchievementsHandler retrieves all achievements
// API route: GET /v1/achievements
func (app *application) getAchievementsHandler(w http.ResponseWriter, r *http.Request) {

	id, err := app.readIDParam(r)
	if err != nil {
		app.notFoundResponse(w, r)
		return
	}

	achievement := data.Achievement{
		ID:          id,
		LastUpdated: time.Now(),
		PositionID:  1,
		UserID:      1,
		Description: "Led cross-functional team of 8 engineers to deliver a new product feature that increased user engagement by 25%. Coordinated development efforts across frontend, backend, and QA teams to ensure on-time delivery and high-quality implementation.",
		Skills:      []string{"leadership", "software development", "product management"},
	}

	err = app.writeJSON(w, http.StatusOK, envelope{"achievement": achievement}, nil)
	if err != nil {
		app.serverErrorResponse(w, r, err)
	}
}
