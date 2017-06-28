import * as React from "react";
import * as TestUtils from "react-dom/test-utils";

import { Hello } from "../Hello";

describe("<Hello />", () => {
    it("renders", () => {
        expect(TestUtils.createRenderer().render(
            <Hello compiler="Webpack" framework="Rex" />,
        )).toMatchSnapshot();
    });
});
