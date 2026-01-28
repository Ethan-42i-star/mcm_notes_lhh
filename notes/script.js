function copyCode(btn) {
    const pre = btn.nextElementSibling; // 获取按钮后面的 pre 标签
    const code = pre.innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        btn.innerText = '已复制！';
        btn.style.backgroundColor = '#10b981'; // 变绿
        setTimeout(() => {
            btn.innerText = '复制代码';
            btn.style.backgroundColor = '#475569'; // 恢复原色
        }, 2000);
    }).catch(err => {
        alert('复制失败，请手动选择复制');
    });
}