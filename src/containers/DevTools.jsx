// Basic devtools configuration
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow"/>
  </DockMonitor>
)

/*
 *To use diff monitor, for example
 *    npm install --save-dev redux-devtools-diff-monitor
 *
 *import DiffMonitor from 'redux-devtools-diff-monitor';
 *export default createDevTools(
 *  <DockMonitor toggleVisibilityKey="ctrl-h"
 *               changePositionKey="ctrl-q">
 *    <DiffMonitor theme="tomorrow"/>
 *  </DockMonitor>
 *)
 */
