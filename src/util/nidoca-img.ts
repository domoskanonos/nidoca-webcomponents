export class NidocaImgHelper {
    static generateImageBase64(
        text: string,
        textColor: string,
        backgroundColor: string
    ): string {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Canvas context is not available');
        }

        // Fill the background color
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the text color and font
        ctx.fillStyle = textColor;

        const element = document.body;
        const computedStyle = getComputedStyle(element);
        const fontFamily = computedStyle.getPropertyValue('--font-family') || 'Arial'; // Fallback auf Arial
        ctx.font = `bold 64px ${fontFamily}`;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        // Extract the first letter, capitalize it, and draw it
        const firstLetter = text.charAt(0).toUpperCase();
        const textMetrics = ctx.measureText(firstLetter);
        const textHeight = textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent;
        ctx.fillText(firstLetter, canvas.width / 2, canvas.height / 2 + textHeight / 2);

        // Return the image as a base64 string
        return canvas.toDataURL('image/png');
    }

    static renderImgText(text: string): string {
        return NidocaImgHelper.generateImageBase64(text, '#555555', '#ffffff');
    }
}