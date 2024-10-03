module.exports = {
  "plugins": [
    '@typescript-eslint/eslint-plugin',
    'nestjs',
    'import'
  ],
  "parserOptions": {
		"project": true
	},
  "extends": [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nestjs/recommended',
  ],
  "root": true,
  "env": {
    "node": true,
    "jest": true,
  },
  "ignorePatterns": ['.eslintrc.js'],

  "rules": {
    '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "prettier/prettier": [
          "error",
          {},
          {
            "usePrettierrc": false
          },
        ],
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            "allowNullableObject": true,
            "allowNullableString": true
          }
        ],
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "overrides": {
              "accessors": "explicit",
              "constructors": "no-public",
              "methods": "explicit",
              "parameterProperties": "explicit",
              "properties": "explicit"
            }
          }
        ],
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            "allowNullableObject": true,
            "allowNullableString": true
          }
        ],
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
  },


  "overrides": [
    {
      "files": [
				"*.ts"
			],
      "rules": {
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "groups": [
              "external",
              "builtin",
              "internal",
              "sibling",
              "parent",
              "index"
            ],
            "pathGroups": [
              {
                "pattern": "./src/typeorm/entities/*.entity.ts",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "./src/modules/**/*.module.ts",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "./src/modules/**/controller/*.controller.ts",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "./src/modules/**/domain/*.ts",
                "group": "internal",
                "position": "after"
              },
              {
                "pattern": "./src/modules/**/services/*.service.ts",
                "group": "internal",
                "position": "after"
              },
            ],
          },
        ]


      },
    }
  ]



};
