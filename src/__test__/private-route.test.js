import React from "react";
import PrivateRoute from "components/PrivateRoute";
import { render, screen, cleanup } from "@testing-library/react";
import { UserContext } from "context/userContext";

afterEach(cleanup);
it("Renderizar no autorizado si no tiene el rol y estado", () => {
    render(
        <UserContext.Provider value={{userData:{rol:"LIDER", estado:"PENDIENTE"}}}>
            <PrivateRoute roleList={["ADMINISTRADOR"]} stateList={["AUTORIZADO"]}>
                <div>Children</div>
            </PrivateRoute>
        </UserContext.Provider>)
    expect(screen.getByTestId("not-authorized")).toHaveTextContent("No estás autorizado para ver este sitio.")
})

it("Renderizar children si tiene el rol y estado", () => {
    render(
        <UserContext.Provider value={{userData:{rol:"ADMINISTRADOR", estado:"AUTORIZADO"}}}>
            <PrivateRoute roleList={["ADMINISTRADOR"]} stateList={["AUTORIZADO"]}>
                <div data-testid="children">Children</div>
            </PrivateRoute>
        </UserContext.Provider>)
    expect(screen.getByTestId("children")).toBeInTheDocument()
})
