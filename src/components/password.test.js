import React from "react";
import { render, fireEvent, waitForElement, findByTestId } from "@testing-library/react";


test("null password", async () => {
    const password = await findByTestId("password");
    const error = await findByTestId("error")

    fireEvent.change(password, { target: { value: '' } })


    expect(error).toHaveValue("Password is empty")
})

test("password less than 8 characters", async () => {
    const password = await findByTestId("password");
    const error = await findByTestId("error")

    fireEvent.change(password, { target: { value: 'footba' } })


    expect(error).toHaveValue("Password should have atleast 8 charecters")
})

test("password with no uppercase characters", async () => {
    const password = await findByTestId("password");
    const error = await findByTestId("error")

    fireEvent.change(password, { target: { value: 'football12' } })


    expect(error).toHaveValue("Password should have atleast 1 Upper Case Charecter")
})

test("password with no lowercase characters", async () => {
    const password = await findByTestId("password");
    const error = await findByTestId("error")

    fireEvent.change(password, { target: { value: 'FOOTBALL12' } })


    expect(error).toHaveValue("Password should have atleast 1 Lower Case Charecter")
})

test("password with no numbers", async () => {
    const password = await findByTestId("password");
    const error = await findByTestId("error")

    fireEvent.change(password, { target: { value: 'FOOTBALLFOOTBALL' } })


    expect(error).toHaveValue("Password should have atleast 1 Numeric Charecter")
})

