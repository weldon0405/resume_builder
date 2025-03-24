package data

import (
	"time"

	"github.com/weldon0405/resume_builder/internal/validator"
)

type Achievement struct {
	ID          int64     `json:"id"`
	LastUpdated time.Time `json:"last_updated"`
	PositionID  int64     `json:"position_id"`
	UserID      int64     `json:"user_id"`
	Description string    `json:"description"`
	Skills      []string  `json:"skills,omitzero"`
}

func ValidateAchievement(v *validator.Validator, achievement *Achievement) {
	v.Check(achievement.Description != "", "description", "must be provided")
	v.Check(achievement.PositionID > 0, "position_id", "must associate with a position")
	v.Check(achievement.Skills != nil, "skills", "must be provided")
	v.Check(validator.Unique(achievement.Skills), "skills", "must not contain duplicate values")
}
