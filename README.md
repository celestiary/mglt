# MGLT
Exploration of the idea of a Multiple Gravitational Lens Telescope.

## Background
This project was inspired by [discussions on Hacker News](https://news.ycombinator.com/item?id=32262545#32262889) about the proposal for a [Solar Gravitational Lens Telescope](https://news.ycombinator.com/item?id=32262545).

## Goal
To determine whether there exists a configuration of stars (or other gravitational lenses) in the local galaxy that would enable a natural multiple gravitational lense telescope.  The telescope would consist of a set of stars focusing distant light towards a collector based in our solar system.  It is unknown whether there is such a configuration of stars that would allow observation of any interesting target.  But it seems possible in principle to precompute the potential targeting field.

## Method
This project is hosted alongside Celestiary in order to use the local 100k star database, originally from [Celestia](https://celestia.space/), to run a search of stars and their lensing fields.  The database contains star positions and types, which can be used to estimate mass.  A star's mass determines its lensing field.

The Sun has a lens difraction of 1.73 arcseconds, which yields a focal length of 548-900 AU.  This geometry determines the useful focal orbit for the SGLT.  Similarly, some objects happen to have a [gravitational lense](https://en.wikipedia.org/wiki/Gravitational_lens) that is already useful from Earth.

A Multi-Gravitational Lense Telescope would combine the lensing from multiple objects to form a synthetic aperature.  So the task is to search for combinations of lenses that focus at a point somewhere in our Solar System.
