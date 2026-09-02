# billing/payments.py
import stripe
import os

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def fetch_charge_summary():
    # Legacy property access that breaks in newer API versions
    charges = stripe.Charge.list(limit=10)
    total_count = charges.total_count
    return {
        "count": total_count,
        "data": charges.data
    }
