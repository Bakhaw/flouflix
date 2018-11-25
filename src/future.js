import React, { Timeout } from 'react';
import { createResource, createCache } from 'simple-cache-provider';

const cache = createCache(() => {});

export function createFetcher(resolver) {
  const resource = createResource(resolver);
  return {
    read: key => resource.read(cache, key)
  };
}

export function Placeholder(props) {
  return (
    <Timeout ms={props.delayMs}>
      {didExpire => (didExpire ? props.fallback : props.children)}
    </Timeout>
  );
}
