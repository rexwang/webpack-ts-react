import * as React from "react";

export interface InterfaceHelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<InterfaceHelloProps, undefined> {
    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
