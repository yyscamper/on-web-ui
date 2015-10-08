// Copyright 2015, EMC, Inc.

'use strict';

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import mixin from 'common-web-ui/lib/mixin';
import PageHelpers from 'common-web-ui/mixins/PageHelpers';
/* eslint-enable no-unused-vars */

import {} from 'material-ui';
import ProfilesGrid from './ProfilesGrid';

@mixin(PageHelpers)
export default class Profiles extends Component {

  render() {
    return (
      <div className="Profiles">
        {this.renderBreadcrumbs({href: 'dash', label: 'Dashboard'}, 'Profiles')}
        <ProfilesGrid />
      </div>
    );
  }

}