import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';




global.React = React;
global.render = render;
global.screen = screen;
global.userEvent = userEvent;
global.fireEvent = fireEvent;