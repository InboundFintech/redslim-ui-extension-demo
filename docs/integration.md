# 🔌 Integration Plan: Redslim UI Extension

This document outlines how the Redslim Proposal Builder UI Extension will integrate with Inbound Fintech's middleware once access is granted.

---

## 📦 Current Behavior (Mocked)

The current version uses a mock service:  
`src/services/calculateProposal.js`

This simulates price and deliverables based on:

- `dataVolume` (in GB)
- `serviceLevel` (basic, premium, enterprise)
- `duration` (in months)

The mock service returns a promise that resolves after a short delay, simulating async behavior.

---

## 🚀 Future Integration: IFT Middleware

Once access is granted to the middleware repo (`ift-middleware`), the mock will be replaced with an actual HTTP request.

### 📍 Expected Endpoint

`POST /calculate-proposal` _(to be confirmed once middleware is accessible)_

### 📨 Payload Format

```json
{
  "dataVolume": 500,
  "serviceLevel": "premium",
  "duration": 12
}
```

### 📬 Expected Response Format

```json
{
  "price": 48000,
  "deliverables": [
    "500 GB of data storage",
    "premium support package",
    "12 month(s) subscription"
  ]
}
```
