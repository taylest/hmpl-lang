import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,o as i}from"./app-CRWUjIol.js";const l={};function t(o,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="vs-code-extension" tabindex="-1"><a class="header-anchor" href="#vs-code-extension"><span>VS Code Extension</span></a></h1><p><a href="https://marketplace.visualstudio.com/items?itemName=hmpljs.hmpl" target="_blank" rel="noopener noreferrer">The HMPL extension</a> for Visual Studio Code provides seamless syntax highlighting and file handling for <code>.hmpl</code> files. Starting from version <code>0.0.3</code>, it introduces new features that enhance the editing experience for developers working with the HMPL template language.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li><strong>Enhanced Syntax Highlighting</strong>: Improved tokenization ensures accurate highlighting for complex nested structures in <code>.hmpl</code> files.</li><li><strong>Custom File Icons</strong>: <code>.hmpl</code> files now appear with a distinct icon in the file explorer, making them easy to identify.</li><li><strong>Theme and Plugin Support</strong>: Work with HMPL as with HTML in VS Code, using your favorite themes, plugins.</li><li><strong>Configuration Options</strong>: New settings to customize the behavior of <code>.hmpl</code> files in the editor, such as enabling bracket pair colorization or customizing the tab size.</li></ul><h2 id="example-creating-and-using-hmpl-files-in-vs-code" tabindex="-1"><a class="header-anchor" href="#example-creating-and-using-hmpl-files-in-vs-code"><span>Example: Creating and Using <code>.hmpl</code> Files in VS Code</span></a></h2><p>Here’s how you can work with <code>.hmpl</code> files using the HMPL extension.</p><h3 id="step-1-create-a-hmpl-file" tabindex="-1"><a class="header-anchor" href="#step-1-create-a-hmpl-file"><span>Step 1: Create a <code>.hmpl</code> File</span></a></h3><p>In your project, create a new file named <code>template.hmpl</code> and add the following content:</p><div class="language-hmpl line-numbers-mode" data-highlighter="shiki" data-ext="hmpl" data-title="hmpl" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#24292EFF;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292EFF;">&gt;</span></span>
<span class="line"><span style="color:#24292EFF;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292EFF;">&gt;</span></span>
<span class="line"><span style="color:#24292EFF;">    { </span></span>
<span class="line"><span style="color:#24292EFF;">      { </span></span>
<span class="line"><span style="color:#24292EFF;">        &quot;data&quot;: &quot;Hello, World!&quot; </span></span>
<span class="line"><span style="color:#24292EFF;">      } </span></span>
<span class="line"><span style="color:#24292EFF;">    }</span></span>
<span class="line"><span style="color:#24292EFF;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292EFF;">&gt;</span></span>
<span class="line"><span style="color:#24292EFF;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292EFF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This file represents a simple HMPL template that outputs a JSON-like object embedded in a <code>div</code>.</p><h3 id="step-2-use-the-hmpl-file-in-javascript" tabindex="-1"><a class="header-anchor" href="#step-2-use-the-hmpl-file-in-javascript"><span>Step 2: Use the <code>.hmpl</code> File in JavaScript</span></a></h3><p>Now, load and use the <code>.hmpl</code> file in your JavaScript code.</p><h4 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js"><span><code>index.js</code></span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> require</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;./template.hmpl&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C2C3C5;">// Render the template</span></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> elementObj</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1976D2;">console</span><span style="color:#6F42C1;">.log</span><span style="color:#24292EFF;">(elementObj);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>.hmpl</code> file is treated as a JavaScript module, with the extension enabling syntax highlighting and integration.</p><h2 id="installation-and-configuration" tabindex="-1"><a class="header-anchor" href="#installation-and-configuration"><span>Installation and Configuration</span></a></h2><h3 id="install-the-extension" tabindex="-1"><a class="header-anchor" href="#install-the-extension"><span>Install the Extension</span></a></h3><ol><li>Open the Extensions view in Visual Studio Code (<code>Ctrl+Shift+X</code> or <code>Cmd+Shift+X</code> on macOS).</li><li>Search for <strong>HMPL</strong> and click <strong>Install</strong>.</li></ol><h3 id="customize-settings" tabindex="-1"><a class="header-anchor" href="#customize-settings"><span>Customize Settings</span></a></h3><p>You can tweak how <code>.hmpl</code> files are handled by adding the following configuration to your <code>settings.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#22863A;">&quot;[hmpl]&quot;</span><span style="color:#24292EFF;">: {</span></span>
<span class="line"><span style="color:#D32F2F;">  &quot;editor.tabSize&quot;</span><span style="color:#212121;">:</span><span style="color:#1976D2;"> 2</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#D32F2F;">  &quot;editor.autoClosingBrackets&quot;</span><span style="color:#212121;">:</span><span style="color:#22863A;"> &quot;always&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="version-compatibility" tabindex="-1"><a class="header-anchor" href="#version-compatibility"><span>Version Compatibility</span></a></h2><p>To fully leverage the HMPL extension’s capabilities, ensure you are using version <code>0.0.3</code> or higher. You can check your current version or update the extension in the Extensions view in Visual Studio Code.</p>`,23)]))}const c=n(l,[["render",t],["__file","vs-code-extension.html.vue"]]),d=JSON.parse('{"path":"/vs-code-extension.html","title":"VS Code Extension","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Example: Creating and Using .hmpl Files in VS Code","slug":"example-creating-and-using-hmpl-files-in-vs-code","link":"#example-creating-and-using-hmpl-files-in-vs-code","children":[{"level":3,"title":"Step 1: Create a .hmpl File","slug":"step-1-create-a-hmpl-file","link":"#step-1-create-a-hmpl-file","children":[]},{"level":3,"title":"Step 2: Use the .hmpl File in JavaScript","slug":"step-2-use-the-hmpl-file-in-javascript","link":"#step-2-use-the-hmpl-file-in-javascript","children":[]}]},{"level":2,"title":"Installation and Configuration","slug":"installation-and-configuration","link":"#installation-and-configuration","children":[{"level":3,"title":"Install the Extension","slug":"install-the-extension","link":"#install-the-extension","children":[]},{"level":3,"title":"Customize Settings","slug":"customize-settings","link":"#customize-settings","children":[]}]},{"level":2,"title":"Version Compatibility","slug":"version-compatibility","link":"#version-compatibility","children":[]}],"git":{},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"vs-code-extension.md"}');export{c as comp,d as data};
