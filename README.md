# Lens ClusterAPI Extension

Add ClusterAPI support to Lens. https://cluster-api.sigs.k8s.io/


## Install

To install open K8s Lens and go to Extensions (CTRL+SHIFT+E or CMD+SHIFT+E), and install `@jlnhnng/lens-capi-extension`.

or

Click on the following link `lens://app/extensions/install/@jlnhnng/lens-capi-extension`


## Development

To install the extension for development

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/jlnhnng/lens-capi-extension.git
ln -s $(pwd) ~/.k8slens/extensions/lens-capi-extension
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
make build
```

OR

```sh
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
npm run dev
```

## Test

Open the Lens application and navigate to a cluster. You should see "FluxCD" dashboard in a cluster menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/lens-capi-extension
```

Restart Lens application.