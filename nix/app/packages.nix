{
  inputs,
  cell,
}: let
	inherit (inputs) nixpkgs std self;
in rec {
  default = chatwith;
  chatwith = nixpkgs.buildNpmPackage {
		pname = "chatwith";
		version = "0.1.0";

		src = std.incl self [
			"package.json"
			"package-lock.json"
			"tsconfig.json"
			"global.d.ts"
			"src"
		];

		npmDepsHash = "sha256-WYIFdjuapxirGzqy31ekP1BjVxTLgZZjkT2x4yOG7To=";
	};
}
