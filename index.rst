.. Axiom Verge Tracker SDK documentation master file, created by
   sphinx-quickstart on Fri Feb  5 23:54:04 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Axiom Verge - Real Time Tracker SDK
===================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Getting Started
===============

When you launch Axiom Verge on your PC, there will be a standard websocket endpoint running at ``ws://localhost:19906/``. This endpoint receives realtime updates about the game state as they happen, utilizing a simplistic JSON structure. Simply subscribe using your preferred websocket implementation and you will receive messages containing a stateless JSON structure describing the game state.

This endpoint does not take any commands or signals, all messages sent to the websocket handler will be ignored.

Asset Pack
==========

For your convenience in creating your client application, we are providing an :download:`assets pack </_static/assets.zip>` with the file names properly reflecting the ones returned in the data structure.

Reference Implementation
========================

VGR has provided a :download:`small reference implementation of the API </_static/AxiomVergeItemTracker-v1.0.zip>`, allowing you to locally run a web-based tracking widget. It maintains feature parity with the former widget used by the mod.

Data Structure
==============

Sample Data
-----------

The structure is fairly self-explanatory, but every field will be documented individually below. Here is a sample of how this data will look during gameplay:

.. code::

   {
     "Items": [
       {
         "mName": "Reflect",
         "mType": 11,
         "mConsumable": false,
         "mExcludedFromCount": false,
         "mRequiredItem": null
       },
       {
       "mName": "FatBeam",
       "mType": 11,
       "mConsumable": false,
       "mExcludedFromCount": false,
       "mRequiredItem": null
       }
     ],
     "AreaName": "ERIBU",
     "CurrentHP": 134,
     "MaxHP": 200,
     "HealthNodes": 0,
     "HealthNodeFragments": 0,
     "PowerNodes": 0,
     "PowerNodesFragments": 0,
     "SizeNodes": 0,
     "RangeNodes": 0,
     "Notes": 0,
     "AreaItemPercent": 12,
     "AreaMapPercent": 17,
     "TotalItemPercent": 1,
     "TotalMapPercent": 1,
     "DeathCount": 0,
     "BubbleCount": 0,
     "BricksCount": 0
   }

Items
-----

A list of all the items the player has collected.

Field documentation for the item object is in the section :ref:`Item Object Structure`.

AreaName
--------

The name of the area in the player's localized language. In English, those are:

 - ``ERIBU``
 - ``ABSU``
 - ``ZI``
 - ``KUR``
 - ``INDI``
 - ``EDIN``
 - ``UKKIN-NA``
 - ``E-KUR-MAH``
 - ``MAR-URU``

AreaItemPercent
---------------

An integer between 0 and 100 representing what percentage of the items in the current area the user player collected.

AreaMapPercent
--------------

An integer between 0 and 100 representing what percentage of the map tiles in the current area the player has collected.

TotalItemPercent
----------------

An integer between 0 and 100 representing what percentage of all items the player has collected.

TotalMapPercent
---------------

An integer betwen 0 and 100 representing what percentage of all map tiles the player has collected.

CurrentHP
---------

The player's current health.

MaxHP
-----

The player's max health.

HealthNodes
-----------

The number of *effective* full-size health nodes the player has. When the player collects enough health node fragments to constitute a whole node, it will be added to this count and the fragments removed.

HealthNodeFragments
-------------------

The number of health node fragments the player has that is not currently contributing to their maximum HP.

PowerNodes
----------

The number *effective* full-size power nodes the player has. When the player collects enough power node fragments to constitute a whole node, it will be added to this count and the fragments removed.

PowerNodeFragments
------------------

The number of power node fragments the player has that is not currently contributing to their damage output.

SizeNodes
---------

The number of size nodes the player has collected.

RangeNodes
----------

The number of range nodes the player has collected.

Notes
-----

The number of notes the player has collected.

DeathCount
----------

The number of times the player has died.

BubbleCount
-----------

The number of bubble blocks the player has destroyed.

This does not update in real time, to avoid flooding the client with events.

BricksCount
-----------

The number of breakable blocks (that are not bubbles) that the player has destroyed.

This does not update in real time, to avoid flooding the client with events.

Item Object Structure
=====================

mName
-----

The name of the item, as used by the game internally. This is not necessarily the same as the name used ingame. For example, "Reverse Slicer" is referred to as "Scythe."

A complete list of these will be provided with the stable release documentation once the randomizer has exited beta.

For now, the :download:`assets pack </_static/assets.zip>` included with this documentation has icons for every item as ``{mName}.svg``.

mType
-----

An integer enum representing the type of the item. The mapping is as follows:

 - ``5``  - Permanent Upgrade
 - ``10`` - Tool
 - ``11`` - Weapon

Other values are currently unused.

mConsumable
-----------

Currently unused and will be removed at a later date.

mExcludedFromCount
------------------

Currently unused and will be removed at a later date.

mRequireditem
-------------

Currently unused and will be removed at a later date.
