package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	//Initialize router instance
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/v1/healthcheck/", app.healthcheckHandler)
	router.HandlerFunc(http.MethodPost, "/v1/achievements", app.createAchievementHandler)
	router.HandlerFunc(http.MethodGet, "/v1/achievements/:id", app.getAchievementsHandler)
	// router.HandlerFunc(http.MethodPut, "/v1/achievements/:id", app.UpdateAchievementHandler)
	// router.HandlerFunc(http.MethodDelete, "/v1/achievements/:id", app.DeleteAchievementHandler)

	return router
}
