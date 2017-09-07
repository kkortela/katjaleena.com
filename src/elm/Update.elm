module Update exposing (..)

import Msgs exposing (Msg)
import Models exposing (Model)
import Navigation
import Routing exposing (parseLocation)
import Dom.Scroll
import Task exposing (Task)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Msgs.NoOp res ->
            ( model, Cmd.none )

        Msgs.ChangeLocation path ->
            ( model, Navigation.newUrl path )

        Msgs.OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Task.attempt Msgs.NoOp (scrollToTop) )


scrollToTop : Task x ()
scrollToTop =
    Dom.Scroll.toTop "body-id"
        |> Task.onError (\_ -> Task.succeed ())
