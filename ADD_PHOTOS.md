# Adding Band Photos to the Website

## Current Status
The website is set up to display band photos in the hero section, but placeholder files are currently in place.

## How to Add Real Band Photos

### 1. Download Photos from Instagram
Go to [@thinktwicefl Instagram](https://www.instagram.com/thinktwicefl/) and download these three photos:

1. **Studio Shot** - The photo with four band members in the studio setting
2. **Bass Player** - The photo of the bass player performing on stage
3. **Drummer** - The photo of the drummer performing on stage

### 2. Replace Placeholder Files
Replace these files in the `public/images/band/` directory:

- `studio-shot.jpg` - Replace with the studio band photo
- `bass-player.jpg` - Replace with the bass player photo  
- `drummer.jpg` - Replace with the drummer photo

### 3. Image Requirements
- **Format**: JPG or PNG
- **Size**: Recommended 1200x800 pixels or larger
- **Quality**: High resolution for web display
- **Optimization**: Compress for web use (under 500KB each)

### 4. File Structure
```
public/
  images/
    band/
      studio-shot.jpg    ← Replace with studio photo
      bass-player.jpg    ← Replace with bass player photo
      drummer.jpg        ← Replace with drummer photo
```

### 5. After Adding Photos
1. Save the image files in the correct directory
2. Run `npm run dev` to test locally
3. Commit and push changes to deploy

## Current Placeholder Files
The current placeholder files contain text instructions. These need to be replaced with actual image files.

## Testing
After adding the photos, the hero section should display:
- Left third: Studio band photo
- Middle third: Bass player photo  
- Right third: Drummer photo

All photos will have a red overlay and reduced opacity for the background effect.
