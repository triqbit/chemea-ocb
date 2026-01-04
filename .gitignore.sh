cat > .gitignore << 'EOF'
# Hugo
/public/
/resources/
*.tmp

# Node
node_modules/
package-lock.json
yarn.lock

# Environment
.env
.env.local
.env.*.local

# OS
.DS_Store
*.swp
*.swo
*~
Thumbs.db

# IDE
.vscode/
.idea/
*.sublime-workspace
*.sublime-project

# Build
dist/
build/
EOF
