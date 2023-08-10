// Copyright (C) 2022 Storj Labs, Inc.
// See LICENSE for copying information.

//go:build !noembed
// +build !noembed

package multinodeweb

import (
	"embed"
	"fmt"
	"io/fs"
)

//go:embed dist/*
var assets embed.FS

// Assets contains either the built multinode from web/multinode/dist directory
// or it is empty.
var Assets = func() fs.FS {
	dist, err := fs.Sub(assets, "dist")
	if err != nil {
		panic(fmt.Errorf("invalid embedding: %w", err))
	}
	return dist
}()
