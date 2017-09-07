module Models exposing (Model, model)

import Routing exposing (Route)


type alias Model =
    { route : Route
    }


model : Route -> Model
model route =
    { route = route
    }
