import * as fs from 'fs';
import * as path from 'path';

interface PhoneContact {
  phone: string;
  name: string | null;
  description: string | null;
}

/**
 * Cleans HTML entities and extra whitespace from extracted text
 */
function cleanText(text: string): string | null {
  if (!text) return null;
  
  // Remove HTML tags and entities
  let cleaned = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
  
  // Remove emoji unicode patterns
  cleaned = cleaned.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').trim();
  
  return cleaned && cleaned !== '' && cleaned !== ' ' ? cleaned : null;
}

/**
 * Extracts phone numbers from the WhatsApp HTML file
 * @returns Array of phone contacts with names and descriptions
 */
function extractPhoneNumbers(): PhoneContact[] {
  const htmlPath = path.join(__dirname, 'whatsapp_road_to_startup_group.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  const contacts: PhoneContact[] = [];

  // Split by role="listitem" to get individual contact blocks
  const contactBlocks = htmlContent.split('role="listitem"').slice(1);

  contactBlocks.forEach((block) => {
    // Extract phone number - must have it
    const phoneMatch = block.match(/\+\d+\s\d+\s\d+/);
    if (!phoneMatch) return;

    const phone = phoneMatch[0].trim();

    // Extract name from aria-label="Maybe ..." 
    let name: string | null = null;
    const nameMatch = block.match(/aria-label="Maybe\s+([^"]*?)"\s+title/);
    if (nameMatch && nameMatch[1]) {
      name = cleanText(nameMatch[1]);
    }

    // Extract description - look for title attribute with actual description content
    // First try to find data-testid with title that's not just whitespace
    let description: string | null = null;
    
    // Pattern 1: Look for title attribute in selectable-text with meaningful content
    const descMatch1 = block.match(/data-testid="selectable-text"\s+dir="auto"\s+title="([^"]*)"/);
    if (descMatch1 && descMatch1[1]) {
      const text = cleanText(descMatch1[1]);
      if (text && text !== '.' && text !== '') {
        description = text;
      }
    }
    
    // Pattern 2: Look for title before selectable-text class (for longer descriptions)
    if (!description) {
      const descMatch2 = block.match(/title="([^"]*?)"\s+class="x13faqbe\s+_ao3e\s+_aupe\s+copyable-text"/);
      if (descMatch2 && descMatch2[1]) {
        const text = cleanText(descMatch2[1]);
        if (text && text !== '.' && text !== '') {
          description = text;
        }
      }
    }

    contacts.push({
      phone,
      name,
      description,
    });
  });

  return contacts;
}

/**
 * Exports phone numbers to a JSON file
 * @param outputFileName - Name of the output JSON file
 */
function exportToJson(outputFileName: string = 'phone_numbers.json'): void {
  try {
    const contacts = extractPhoneNumbers();
    const outputPath = path.join(__dirname, outputFileName);

    fs.writeFileSync(outputPath, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log(`✓ Successfully exported ${contacts.length} contacts to ${outputFileName}`);
    console.log(`✓ File saved at: ${outputPath}`);
  } catch (error) {
    console.error('Error exporting phone numbers:', error);
    throw error;
  }
}

// Run the export if this file is executed directly
if (require.main === module) {
  exportToJson();
}

export { extractPhoneNumbers, exportToJson, PhoneContact };
