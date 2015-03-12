#!/bin/sh

cd $HOME/myfitness && ember build -prod

echo 'cleaning up files....'
rm -rf $HOME/yan-workout/public/assets/*
rm -rf $HOME/yan-workout/public/images/*

echo 'copying files....'
cp $HOME/myfitness/dist/assets/* $HOME/yan-workout/public/assets
cp $HOME/myfitness/dist/images/* $HOME/yan-workout/public/images
cp $HOME/myfitness/dist/index.html $HOME/yan-workout/app/views/static/index.html.erb

echo 'done!'
