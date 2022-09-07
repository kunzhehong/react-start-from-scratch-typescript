import React, { Component, useState } from 'react';

interface MeProps {
  name: string;
}

export class About extends Component<MeProps> {
  static displayName = About.name;
  constructor(props: MeProps) {
    super(props);

    this.state = {
      name: 'Anonymous',
    };
  }
  render() {
    return (
      <>
        <main>
          <p>{this.props.name}</p>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you think?
          </p>
        </main>
      </>
    )
  }
}

