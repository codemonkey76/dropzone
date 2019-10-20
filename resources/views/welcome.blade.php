@extends('layouts.app')

@section('content')
    <vue-auto-dropzone ref="zone"
        @drop="drop"
        :options="options"
    ></vue-auto-dropzone>
@endsection
