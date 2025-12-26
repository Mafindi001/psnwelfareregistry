# PSN Taraba Welfare Registry

A simple static brochure prototype for the PSN Taraba Welfare Registry. This repository contains a responsive single-page HTML/CSS/JS site that demonstrates the Member Dashboard, Admin views, and basic UI for reminders and member management.

## Features
- Member Dashboard with upcoming reminders and quick edit
- Profile form (client-side placeholder)
- Calendar view placeholder
- Admin panels for stats, member management, event manager and system settings
- Export sample members to CSV

## Run locally
1. Clone the repository
2. Open the folder in VS Code
3. Use the Live Server extension or a static server such as:

```bash
npx serve .
```

## Deployment
- A GitHub Actions workflow is included to publish the repository contents to the `gh-pages` branch when you push to `main`. After the first push, enable GitHub Pages in the repository settings and select the `gh-pages` branch as the publishing source.

## Notes
- This is a frontend static prototype only. You will need to add a backend or API for persistence, authentication, and real email reminder delivery.

License: MIT