import React from "react";
import ButtonLoading from "components/ButtonLoading";
import ButtonAccept from "components/ButtonAccept";
import ButtonCircle from "components/ButtonCircle";
import ButtonPurple from "components/ButtonPurple";
import {render, screen, cleanup} from "@testing-library/react";

afterEach(cleanup)
it("Boton loading renderiza ok", ()=>{
    render(<ButtonLoading text={"Hola"} loading={false} disabled={false}/>);
    expect(screen.getByTestId("button-loading")).toBeInTheDocument();
});

it("Boton loading mostrar texto sino esta cargando", ()=>{
    render(<ButtonLoading text={"Hola"} loading={false} disabled={false}/>);
    expect(screen.getByTestId("button-loading")).toHaveTextContent("Hola");
});

it("Boton loading no mostrar texto si esta cargando", ()=>{
    render(<ButtonLoading text={"Hola"} loading={true} disabled={false}/>);
    expect(screen.getByTestId("button-loading")).not.toHaveTextContent("Hola");
});

it("Mostrar loading en boton loading", ()=>{
    render(<ButtonLoading text={"Hola"} loading={true} disabled={false}/>);
    expect(screen.getByTestId("loading-loading")).toBeInTheDocument();
});

it("Boton loading disabled", ()=>{
    render(<ButtonLoading text={"Hola"} loading={true} disabled={true}/>);
    expect(screen.getByTestId("button-loading")).toHaveAttribute("disabled");
});

it("Boton loading muestra svg cuando esta loading", ()=>{
    render(<ButtonLoading text={"Hola"} loading={true} disabled={false}/>);
    expect(screen.getByTestId("button-loading")).toMatchSnapshot();
});

it("Boton accept renderiza ok", ()=>{
    render(<ButtonAccept text={"Hola"} loading={false} disabled={false}/>);
    expect(screen.getByTestId("button-accept")).toBeInTheDocument();
});

it("Boton accept mostrar texto sino esta cargando", ()=>{
    render(<ButtonAccept text={"Confirmar"} loading={false} disabled={false}/>);
    expect(screen.getByTestId("button-accept")).toHaveTextContent("Confirmar");
});

it("Boton accept no mostrar texto si esta cargando", ()=>{
    render(<ButtonAccept text={"Confirmar"} loading={true} disabled={false}/>);
    expect(screen.getByTestId("button-accept")).not.toHaveTextContent("Confirmar");
});

it("Mostrar loading en boton accept", ()=>{
    render(<ButtonAccept text={"Confirmar"} loading={true} disabled={false}/>);
    expect(screen.getByTestId("accept-loading")).toBeInTheDocument();
});

it("Boton accept disabled", ()=>{
    render(<ButtonAccept text={"Confirmar"} loading={true} disabled={true}/>);
    expect(screen.getByTestId("button-accept")).toHaveAttribute("disabled");
});

it("Boton circle renderiza ok", ()=>{
    render(<ButtonCircle/>);
    expect(screen.getByTestId("button-circle")).toBeInTheDocument();
});

it("Boton purple renderiza ok", ()=>{
    render(<ButtonPurple/>);
    expect(screen.getByTestId("button-purple")).toBeInTheDocument();
});