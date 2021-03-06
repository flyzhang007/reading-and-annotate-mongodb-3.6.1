/**
 * Multiversion initial sync test. Tests that initial sync succeeds when a 'last-stable' version
 * secondary syncs from a 'latest' version replica set.
 */

'use strict';

load("./jstests/multiVersion/libs/initial_sync.js");

var testName = "multiversion_initial_sync_last_stable_from_latest";
let replSetVersion = "latest";
let newSecondaryVersion = "last-stable";
let configSettings = {catchUpTimeoutMillis: 2000};
let fcv = "3.4";

multversionInitialSyncTest(testName, replSetVersion, newSecondaryVersion, configSettings, fcv);
