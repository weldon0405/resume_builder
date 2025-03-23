package data

import (
	"time"
)

type Achievement struct {
	ID          int64     `json:"id"`
	LastUpdated time.Time `json:"last_updated"`
	PositionID  int64     `json:"position_id"`
	UserID      int64     `json:"user_id"`
	Description string    `json:"description"`
	Skills      []string  `json:"skills,omitzero"`
}
