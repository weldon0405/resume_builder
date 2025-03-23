package data

import (
	"time"
)

type Subscription struct {
	ID                 int64     `json:"id"`
	CreatedAt          time.Time `json:"created_at"`
	LastUpdated        time.Time `json:"last_updated"`
	SubLevelID         int64     `json:"sub_level_id"`
	LastPaymentDate    time.Time `json:"last_payment_date"`
	NextBillingDate    time.Time `json:"next_billing_date"`
	SubscriptionStatus bool      `json:"subscription_status"`
}
