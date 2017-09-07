module Main exposing (..)

import Navigation
import Msgs exposing (Msg)
import Routing exposing (parseLocation)
import Models exposing (Model, model)
import Update exposing (update)
import View exposing (view)


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            parseLocation location
    in
        ( model currentRoute, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    Navigation.program Msgs.OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
