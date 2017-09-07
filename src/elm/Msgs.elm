module Msgs exposing (..)

import Navigation exposing (Location)
import Dom


type Msg
    = ChangeLocation String
    | OnLocationChange Location
    | NoOp (Result Dom.Error ())
