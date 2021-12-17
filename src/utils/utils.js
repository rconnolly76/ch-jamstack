import React from 'react';




export const findPublicLinkByType = (publicLinks, type) => {
    return Object.keys(publicLinks).reduce((acc, key) => {
        if (publicLinks[key].resource === type) {
          acc.push(publicLinks[key]);
        }
        return acc;
      }, []);
    };