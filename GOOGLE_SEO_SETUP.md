# Google SEO Setup Guide for Lyons on Track

## 1. Google Search Console Setup

### Step 1: Add Your Site to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `www.lyonsontrack.org`
4. Choose "Domain" property type (recommended)
5. Follow the verification steps (usually involves adding a DNS record)

### Step 2: Submit Your Sitemap
1. In Google Search Console, go to "Sitemaps" in the left menu
2. Add your sitemap URL: `https://www.lyonsontrack.org/sitemap.xml`
3. Submit and wait for Google to process it

### Step 3: Request Indexing
1. In Google Search Console, go to "URL Inspection"
2. Enter your homepage URL: `https://www.lyonsontrack.org/`
3. Click "Request Indexing"
4. Repeat for other important pages

## 2. Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account for "Lyons on Track Campaign"
3. Create a new property for your website
4. Get your Measurement ID (starts with "G-")

### Step 2: Add Analytics to Your Site
Add this script to your `index.html` head section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## 3. Local SEO Optimization

### Step 1: Google My Business
1. Go to [Google My Business](https://business.google.com/)
2. Create a listing for "Lyons on Track Campaign"
3. Add your address, phone, and website
4. Add photos of your candidates and campaign events
5. Encourage supporters to leave reviews

### Step 2: Local Citations
Submit your campaign information to:
- [Berks County Elections Office](https://www.co.berks.pa.us/Dept/Elections/Pages/default.aspx)
- Local news websites
- Community directories
- Social media platforms

## 4. Content Optimization

### Keywords to Target
- "Lyons PA election 2024"
- "Lyons Borough Council candidates"
- "Alexander Darlington Lyons Mayor"
- "Tracey Sutton Lyons Borough Council"
- "Lyons PA voting information"
- "Berks County PA local election"

### Content Strategy
1. **Blog Posts**: Create content about:
   - Local issues in Lyons
   - Candidate backgrounds
   - Voting information
   - Community events

2. **Local News**: Reach out to:
   - Reading Eagle
   - Kutztown Patriot
   - Berks County news outlets

## 5. Social Media Integration

### Platforms to Use
- Facebook: Create a campaign page
- Instagram: Share candidate photos and events
- Twitter/X: Share campaign updates
- Nextdoor: Engage with local community

### Social Media Meta Tags
The Open Graph and Twitter meta tags are already added to your `index.html`.

## 6. Technical SEO Checklist

### ✅ Completed
- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Robots.txt file
- [x] XML sitemap
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] Geographic meta tags

### 🔄 To Do
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create Google My Business listing
- [ ] Add more content pages
- [ ] Optimize images with alt text
- [ ] Improve page load speed

## 7. Monitoring and Maintenance

### Weekly Tasks
1. Check Google Search Console for errors
2. Monitor search rankings for target keywords
3. Update content regularly
4. Respond to Google My Business reviews

### Monthly Tasks
1. Update sitemap with new content
2. Review and update meta descriptions
3. Check for broken links
4. Analyze Google Analytics data

## 8. Additional SEO Tips

### Local SEO
- Include "Lyons, PA" in all page titles
- Add local business schema markup
- Get listed in local directories
- Encourage local backlinks

### Content Marketing
- Write about local issues
- Share candidate stories
- Create voting guides
- Post about community events

### Technical SEO
- Ensure mobile responsiveness
- Optimize page load speed
- Use descriptive URLs
- Add alt text to all images

## 9. Expected Timeline

- **Immediate**: Site will be indexed within 1-2 weeks
- **1-2 months**: Start appearing in local searches
- **3-6 months**: Build authority and improve rankings
- **Ongoing**: Continue content creation and optimization

## 10. Contact Information

For technical support or questions about this SEO setup:
- Website: https://www.lyonsontrack.org
- Email: [Your campaign email]
- Phone: [Your campaign phone]

---

**Note**: This guide assumes your domain is `www.lyonsontrack.org`. Update all URLs if you're using a different domain. 