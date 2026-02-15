---
sidebar_position: 2
title: Locations API
description: Complete guide to the Rick and Morty Locations API
---

# 🟢 Locations API

The Locations API provides access to all locations from the Rick and Morty universe.

## 📡 Endpoints

### Get All Locations

```
GET https://rickandmortyapi.com/api/location
```

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `page` | integer | Page number | `?page=2` |
| `name` | string | Filter by name | `?name=earth` |
| `type` | string | Filter by type | `?type=planet` |
| `dimension` | string | Filter by dimension | `?dimension=C-137` |

### Get Location by ID

```
GET https://rickandmortyapi.com/api/location/{id}
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/location/1
```

### Filter Locations

```bash
curl "https://rickandmortyapi.com/api/location?type=planet&dimension=C-137"
```

## 📋 Response Schema

```json
{
  "id": 1,
  "name": "Earth (C-137)",
  "type": "Planet",
  "dimension": "Dimension C-137",
  "residents": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2"
  ],
  "url": "https://rickandmortyapi.com/api/location/1",
  "created": "2017-11-04T18:48:46.250Z"
}
```

## 🌍 Location Types

| Type | Description |
|------|-------------|
| Planet | planets like Earth |
| Cluster | clusters of locations |
| Space station | space stations |
| Microverse | microverses |
| TV | TV locations |
| Resort | resorts |
| Fantasy town | fantasy towns |
| Game | game locations |
| Celestial | celestial locations |
| Unknown | unknown locations |
| Dimension | dimensions |
| Multiverse | multiverses |

## ✅ Test Cases

Our comprehensive test suite validates:

| Test | Description |
|------|-------------|
| ✅ Status 200 | Verify successful response |
| ✅ Pagination | Response includes info object |
| ✅ Required fields | Location has all required properties |
| ✅ Name filter | Filter by name works correctly |
| ✅ Type filter | Filter by type works correctly |
| ✅ Dimension filter | Filter by dimension works correctly |
| ✅ Chained requests | Saved variables used in tests |

## 🎯 Test Count

- **Total Tests:** 18 assertions
- **Coverage:** Full endpoint coverage

## 📖 Related Documentation

- [Characters API](/characters)
- [Episodes API](/episodes)
- [Rick and Morty API Official Docs](https://rickandmortyapi.com/documentation)
