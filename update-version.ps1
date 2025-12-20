# 定义旧版本号和新版本号（恢复操作：将新版本号作为旧版本号，旧版本号作为新版本号）
$oldVersion = "γ1.25.1220.1"
$newVersion = "γ.25.1129.1"

# 获取所有HTML文件
$htmlFiles = Get-ChildItem -Path ".\public" -Filter "*.html" -Recurse

# 遍历每个文件并更新版本号
foreach ($file in $htmlFiles) {
    try {
        # 读取文件内容
        $content = Get-Content -Path $file.FullName -Raw
        
        # 更新中文版本号
        $content = $content -replace "版本号-$oldVersion", "版本号-$newVersion"
        
        # 更新英文版本号
        $content = $content -replace "Version-$oldVersion", "Version-$newVersion"
        
        # 写入更新后的内容
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        
        Write-Host "Updated: $($file.FullName)"
    } catch {
        Write-Host "Error updating $($file.FullName): $_" -ForegroundColor Red
    }
}

Write-Host "All files processed!" -ForegroundColor Green