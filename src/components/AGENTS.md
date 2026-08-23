# src/components — shared UI kit

## OVERVIEW

Reusable, type-driven presentational components: the DataTable/DataFilter/FormPage trio powers every list page; FormInputs supplies form fields (Upload, PublicMemberSearch, captcha). Barrel: `src/components/index.tsx`.

## STRUCTURE

```
components/
├── DataTable/        # generic table: columns handler, ColumnButton (persisted cols), FilterButton, ActionColumn
├── DataFilter/       # type-driven filter form (inputs/ = 8 filter-input components)
├── FormPage/         # page scaffold: action bar, errors, field grid (utils/ has FormPageErrors etc.)
├── FormInputs/       # form fields: Upload/, PublicMemberSearch, Captcha, select inputs
├── Captcha/ Iconify/ IconButton/ Loading/ Status/ Welcome/
└── index.tsx         # barrel — EXCLUDES FormPage + FormInputs (import those directly)
```

## WHERE TO LOOK

| Need | Component |
|------|-----------|
| List/table page | `DataTable/DataTable.tsx` (wrap `mantine-datatable`, drives filter+pagination) |
| Filter form | `DataFilter/` (column `type` → auto input) |
| Form scaffold | `FormPage/` (action bar + error display) |
| File upload field | `FormInputs/Upload/` |
| Member search field | `FormInputs/PublicMemberSearch.tsx` |
| Slider captcha | `Captcha/` |

## CONVENTIONS

- **Column `type` drives filter generation**: `'string'|'number'|'enum'|'date'|'boolean'|'array'|'image'` (`DataFilter/types.ts`); enum columns need `options: [{label, value}]`.
- DataTable columns: `{ accessor, title: t(...), type, options?, hiddenFilter? }`; permission-gated actions via `editRoute`/`addRoutePath` props.
- Co-located sub-files per component: `Upload.tsx` + `Upload.hook.ts` + `Upload.interface.ts` + `Upload.module.scss` + `index.tsx`.
- Style: CSS Modules (`*.module.scss`), `@use 'src/styles/base' as *;` for `rem()`/`light-dark()`/mixins.
- Import shared UI from `src/components` barrel; FormPage/FormInputs imported directly (`src/components/FormPage`).

## ANTI-PATTERNS

- **DataFilter + DataTable are the project's `any` hotspots** (`condition: any`, `item: any`). Match the local style — don't half-type one function while leaving the rest `any`.
- **`_item as any` render-callback cast is accepted** (mantine-datatable renders untyped) — e.g. `const item: Company = _item as any`.
- Don't add `TODO`/`@ts-ignore`/`console.log` — project-wide zero policy.
