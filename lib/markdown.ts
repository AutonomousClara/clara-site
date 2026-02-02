/**
 * Markdown parser simples mas robusto
 * Renderiza como um README bonito
 */

export function parseMarkdown(content: string): string {
  let html = content;

  // Escape HTML primeiro
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Code blocks (antes de outras transformações)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="code-block"><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Headers
  html = html.replace(/^#### (.*)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');

  // Bold e Italic
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Blockquotes
  html = html.replace(/^&gt; (.*)$/gm, '<blockquote>$1</blockquote>');
  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // Ordered lists
  html = html.replace(/^(\d+)\. (.*)$/gm, '<oli>$2</oli>');
  // Wrap consecutive oli in ol
  html = html.replace(/((?:<oli>.*<\/oli>\n?)+)/g, '<ol>$1</ol>');
  html = html.replace(/<oli>/g, '<li>').replace(/<\/oli>/g, '</li>');

  // Unordered lists
  html = html.replace(/^- (.*)$/gm, '<uli>$1</uli>');
  // Wrap consecutive uli in ul
  html = html.replace(/((?:<uli>.*<\/uli>\n?)+)/g, '<ul>$1</ul>');
  html = html.replace(/<uli>/g, '<li>').replace(/<\/uli>/g, '</li>');

  // Clean up newlines inside lists
  html = html.replace(/<\/li>\n<li>/g, '</li><li>');
  html = html.replace(/<ul>\n/g, '<ul>');
  html = html.replace(/\n<\/ul>/g, '</ul>');
  html = html.replace(/<ol>\n/g, '<ol>');
  html = html.replace(/\n<\/ol>/g, '</ol>');

  // Parágrafos
  const blocks = html.split(/\n\n+/);
  html = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    // Skip if already wrapped in a block element
    if (/^<(h[1-6]|ul|ol|pre|blockquote|hr|div|li)/.test(block)) {
      return block;
    }
    // Skip if it contains list elements (might be partial list)
    if (/<(ul|ol|li)/.test(block)) {
      return block;
    }
    // Wrap in paragraph
    return `<p>${block.replace(/\n/g, '<br />')}</p>`;
  }).join('\n\n');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}
