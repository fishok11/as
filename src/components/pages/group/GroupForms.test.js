import { fireEvent, render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../../../store';

import Group from './Group';

let store;
beforeEach(() => {
  store = configureStore({ reducer });
});


describe("<Group />", () => {
  it("should render component", () => {
    render(
      <Provider store={store}>
        <Group />
      </Provider>
    );
    expect(screen.queryByTestId("group")).toBeInTheDocument();
  });

  it("should render component GroupInfo on the default screen", () => {
    render(
      <Provider store={store}>
        <Group />
      </Provider>
    );
    expect(screen.queryByTestId("group-info")).toBeInTheDocument();
  });

  it("should render component GroupPages on the default screen", () => {
    render(
      <Provider store={store}>
        <Group />
      </Provider>
    );
    expect(screen.queryByTestId("group-edit-buttons")).toBeInTheDocument();
  });

  it("should render component GroupName on the default screen", () => {
    render(
      <Provider store={store}>
        <Group />
      </Provider>
    );
    expect(screen.queryByTestId("group-name")).toBeInTheDocument();
  });

  it("should render component GroupDate on the step 2 screen", () => {
    render(
      <Provider store={store}>
        <Group />
      </Provider>
    );

    const input = screen.getByTestId("group-name-input");

    fireEvent.change(input, {target: { value: "new content" }});

    act(() => {
      screen.queryByText(/^OK$/i).click();
    });

    expect(screen.queryByTestId("group-date")).toBeInTheDocument();
  });
});