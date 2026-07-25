<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UdharKart — All-in-One JS</title>
    <!-- Google Material Symbols -->
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1" />
    <style>
        /* =============================================================
           UDHARKART — combined styles (minimal)
           ============================================================= */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }

        :root {
            --bg: #f4f6fa;
            --surface: #ffffff;
            --surface2: #f1f3f7;
            --text: #1a1a2e;
            --text2: #4a4a6a;
            --border: #e2e6ee;
            --primary: #6c5ce7;
            --primary-light: #a29bfe;
            --shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
            --radius: 16px;
            --radius-sm: 10px;
            --transition: 0.25s ease;
        }

        [data-theme="dark"] {
            --bg: #0d0d1a;
            --surface: #1a1a2e;
            --surface2: #252542;
            --text: #eaeaf5;
            --text2: #a8a8c8;
            --border: #2d2d4a;
            --shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        body {
            background: var(--bg);
            color: var(--text);
            transition: background var(--transition), color var(--transition);
            font-size: 15px;
            line-height: 1.5;
            min-height: 100vh;
            display: flex;
        }

        /* ---- SIDEBAR ---- */
        #sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
            height: 100vh;
            background: var(--surface);
            border-right: 1px solid var(--border);
            padding: 24px 16px;
            overflow-y: auto;
            z-index: 1000;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow);
        }
        #sidebar.open {
            transform: translateX(0);
        }
        #sidebar .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 22px;
            font-weight: 700;
            color: var(--primary);
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border);
            margin-bottom: 20px;
        }
        #sidebar .brand span {
            font-size: 28px;
        }
        .sidebar-nav {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .sidebar-nav li {
            margin-bottom: 4px;
        }
        .sidebar-nav .nav-link {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 12px 16px;
            border-radius: var(--radius-sm);
            color: var(--text2);
            text-decoration: none;
            transition: all var(--transition);
            cursor: pointer;
            font-weight: 500;
            position: relative;
        }
        .sidebar-nav .nav-link:hover {
            background: var(--surface2);
            color: var(--text);
        }
        .sidebar-nav .nav-link.active {
            background: var(--primary);
            color: #fff;
        }
        .sidebar-nav .nav-link .material-symbols-outlined {
            font-size: 22px;
        }
        .sidebar-nav .badge {
            margin-left: auto;
            background: #e74c3c;
            color: #fff;
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 20px;
            font-weight: 600;
        }
        .sidebar-nav .badge-dot {
            width: 8px;
            height: 8px;
            background: #e74c3c;
            border-radius: 50%;
            margin-left: auto;
            display: none;
        }
        .sidebar-footer {
            margin-top: 30px;
            padding-top: 16px;
            border-top: 1px solid var(--border);
            font-size: 13px;
            color: var(--text2);
        }

        /* ---- OVERLAY ---- */
        #sidebarOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }
        #sidebarOverlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        /* ---- MAIN ---- */
        #main {
            flex: 1;
            margin-left: 0;
            padding: 0 24px 40px;
            transition: margin-left 0.3s ease;
            min-height: 100vh;
            max-width: 100%;
        }

        /* ---- TOPNAV ---- */
        .topnav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 0 14px;
            border-bottom: 1px solid var(--border);
            margin-bottom: 28px;
            flex-wrap: wrap;
            gap: 12px;
        }
        .topnav-left {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .topnav-left .menu-btn {
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: var(--text);
            display: flex;
            align-items: center;
        }
        .topnav-left h1 {
            font-size: 22px;
            font-weight: 600;
        }
        .topnav-right {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .topnav-right .search-input {
            background: var(--surface2);
            border: 1px solid var(--border);
            border-radius: 30px;
            padding: 8px 18px;
            font-size: 14px;
            color: var(--text);
            outline: none;
            width: 200px;
            transition: all var(--transition);
        }
        .topnav-right .search-input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.15);
        }
        .topnav-right .icon-btn {
            background: var(--surface2);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text);
            transition: all var(--transition);
            font-size: 22px;
        }
        .topnav-right .icon-btn:hover {
            background: var(--border);
        }
        .topnav-right .theme-btn {
            background: var(--surface2);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text);
            transition: all var(--transition);
            font-size: 22px;
        }
        .topnav-right .theme-btn:hover {
            background: var(--border);
        }
        #currentDate {
            font-size: 14px;
            color: var(--text2);
            font-weight: 500;
            white-space: nowrap;
        }

        /* ---- PAGE VIEWS ---- */
        .page-view {
            display: none;
            animation: fadeUp 0.3s ease;
        }
        .page-view.active {
            display: block;
        }
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* ---- GLASS CARD ---- */
        .glass-card {
            background: var(--surface);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            border: 1px solid var(--border);
            padding: 20px 24px;
            transition: all var(--transition);
        }

        /* ---- TOASTS ---- */
        #toastContainer {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 380px;
            width: 100%;
            pointer-events: none;
        }
        .toast {
            background: var(--surface);
            color: var(--text);
            padding: 14px 20px;
            border-radius: var(--radius-sm);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
            border-left: 5px solid var(--primary);
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
            pointer-events: auto;
            animation: slideUp 0.3s ease;
            border: 1px solid var(--border);
        }
        .toast.hide {
            animation: slideDown 0.3s ease forwards;
        }
        .toast .material-symbols-outlined {
            font-size: 24px;
            color: var(--primary);
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(30px);
            }
        }

        /* ---- DASHBOARD GRID ---- */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 18px;
            margin-bottom: 28px;
        }
        .stat-card {
            background: var(--surface);
            border-radius: var(--radius);
            padding: 20px;
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .stat-card .stat-icon {
            font-size: 32px;
            color: var(--primary);
        }
        .stat-card .stat-info h3 {
            font-size: 24px;
            font-weight: 700;
        }
        .stat-card .stat-info p {
            font-size: 14px;
            color: var(--text2);
        }

        .actions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 14px;
            margin-top: 12px;
        }
        .action-btn {
            background: var(--surface2);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 16px 12px;
            text-align: center;
            cursor: pointer;
            transition: all var(--transition);
            color: var(--text);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
        .action-btn:hover {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
            transform: translateY(-2px);
        }
        .action-btn .material-symbols-outlined {
            font-size: 28px;
        }

        /* ---- LOGIN ---- */
        .login-container {
            max-width: 420px;
            margin: 40px auto;
            padding: 32px;
            background: var(--surface);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
        }
        .login-container h2 {
            margin-bottom: 6px;
        }
        .login-container .sub {
            color: var(--text2);
            font-size: 14px;
            margin-bottom: 24px;
        }
        .form-group {
            margin-bottom: 18px;
        }
        .form-group label {
            display: block;
            font-weight: 500;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .form-group input {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--bg);
            color: var(--text);
            font-size: 15px;
            outline: none;
            transition: all var(--transition);
        }
        .form-group input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.12);
        }
        .password-wrap {
            position: relative;
        }
        .password-wrap input {
            padding-right: 44px;
        }
        .toggle-password {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text2);
            font-size: 20px;
        }
        .btn-primary {
            background: var(--primary);
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: var(--radius-sm);
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all var(--transition);
            width: 100%;
        }
        .btn-primary:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }
        .btn-secondary {
            background: var(--surface2);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 10px 20px;
            border-radius: var(--radius-sm);
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition);
        }
        .btn-secondary:hover {
            background: var(--border);
        }
        .login-footer {
            text-align: center;
            margin-top: 18px;
            font-size: 14px;
            color: var(--text2);
        }
        .login-footer a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
        }

        /* ---- INVOICE ---- */
        .invoice-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
        .invoice-actions button {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 10px 18px;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            background: var(--surface2);
            color: var(--text);
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition);
        }
        .invoice-actions button:hover {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }
        .invoice-actions button .material-symbols-outlined {
            font-size: 18px;
        }
        .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
        }
        .invoice-table th {
            text-align: left;
            padding: 10px 12px;
            border-bottom: 2px solid var(--border);
            color: var(--text2);
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .invoice-table td {
            padding: 10px 12px;
            border-bottom: 1px solid var(--border);
        }
        .invoice-totals {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 2px solid var(--border);
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 4px;
        }
        .invoice-totals .total-row {
            display: flex;
            justify-content: space-between;
            width: 260px;
            font-size: 15px;
        }
        .invoice-totals .total-row.grand {
            font-weight: 700;
            font-size: 20px;
            color: var(--primary);
            border-top: 1px solid var(--border);
            padding-top: 8px;
            margin-top: 4px;
        }

        /* ---- ORDERS ---- */
        .orders-toolbar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            margin-bottom: 18px;
        }
        .orders-toolbar select,
        .orders-toolbar input {
            padding: 8px 14px;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--surface2);
            color: var(--text);
            font-size: 14px;
            outline: none;
        }
        .orders-toolbar select:focus,
        .orders-toolbar input:focus {
            border-color: var(--primary);
        }
        .orders-toolbar .search-input {
            flex: 1;
            min-width: 160px;
        }
        .orders-toolbar .btn-secondary {
            padding: 8px 16px;
        }

        .table-wrap {
            overflow-x: auto;
        }
        table.data-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        table.data-table th {
            text-align: left;
            padding: 12px 14px;
            border-bottom: 2px solid var(--border);
            color: var(--text2);
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }
        table.data-table td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
        }
        table.data-table tr:hover td {
            background: var(--surface2);
        }
        .status-badge {
            display: inline-block;
            padding: 3px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: capitalize;
        }
        .status-badge.completed {
            background: #d4edda;
            color: #155724;
        }
        .status-badge.processing {
            background: #cce5ff;
            color: #004085;
        }
        .status-badge.pending {
            background: #fff3cd;
            color: #856404;
        }
        .status-badge.shipped {
            background: #d1ecf1;
            color: #0c5460;
        }
        .status-badge.delivered {
            background: #d4edda;
            color: #155724;
        }
        .status-badge.cancelled {
            background: #f8d7da;
            color: #721c24;
        }
        .status-badge.refunded {
            background: #e2e3e5;
            color: #383d41;
        }
        [data-theme="dark"] .status-badge.completed {
            background: #1e3a2a;
            color: #8fdfb0;
        }
        [data-theme="dark"] .status-badge.processing {
            background: #1a2a4a;
            color: #8ab8ff;
        }
        [data-theme="dark"] .status-badge.pending {
            background: #3d2e1a;
            color: #ffd966;
        }
        [data-theme="dark"] .status-badge.shipped {
            background: #1a3a3a;
            color: #7dd5e0;
        }
        [data-theme="dark"] .status-badge.delivered {
            background: #1e3a2a;
            color: #8fdfb0;
        }
        [data-theme="dark"] .status-badge.cancelled {
            background: #3a1a1a;
            color: #f5a0a0;
        }
        [data-theme="dark"] .status-badge.refunded {
            background: #2a2a3a;
            color: #b0b0c8;
        }

        .table-actions {
            display: flex;
            gap: 6px;
        }
        .table-actions .action-icon {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text2);
            padding: 4px;
            border-radius: 6px;
            transition: all var(--transition);
            display: flex;
            align-items: center;
        }
        .table-actions .action-icon:hover {
            background: var(--surface2);
            color: var(--primary);
        }
        .table-actions .action-icon.delete:hover {
            color: #e74c3c;
        }

        .pagination {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 18px;
            flex-wrap: wrap;
        }
        .pagination button {
            padding: 6px 14px;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--surface2);
            color: var(--text);
            cursor: pointer;
            font-weight: 500;
            transition: all var(--transition);
        }
        .pagination button:hover:not(:disabled) {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }
        .pagination button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
        .pagination .pages button {
            min-width: 38px;
            text-align: center;
        }
        .pagination .pages button.active {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }
        #paginationInfo {
            font-size: 14px;
            color: var(--text2);
            margin-left: 8px;
        }

        /* ---- PRODUCTS ---- */
        .products-toolbar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            margin-bottom: 18px;
        }
        .products-toolbar select,
        .products-toolbar input {
            padding: 8px 14px;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--surface2);
            color: var(--text);
            font-size: 14px;
            outline: none;
        }
        .products-toolbar select:focus,
        .products-toolbar input:focus {
            border-color: var(--primary);
        }
        .products-toolbar .search-input {
            flex: 1;
            min-width: 160px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 18px;
        }
        .product-card {
            background: var(--surface);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            padding: 18px 16px 16px;
            box-shadow: var(--shadow);
            transition: all var(--transition);
            cursor: default;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        .product-card .product-img {
            font-size: 44px;
            color: var(--primary);
            margin-bottom: 8px;
        }
        .product-card h4 {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 2px;
        }
        .product-card .product-category {
            font-size: 13px;
            color: var(--text2);
            margin-bottom: 6px;
        }
        .product-card .price {
            font-size: 18px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 6px;
        }
        .product-card .stock-badge {
            font-size: 12px;
            padding: 2px 12px;
            border-radius: 20px;
            font-weight: 500;
            margin-bottom: 12px;
        }
        .stock-badge.in-stock {
            background: #d4edda;
            color: #155724;
        }
        .stock-badge.low-stock {
            background: #fff3cd;
            color: #856404;
        }
        .stock-badge.out-of-stock {
            background: #f8d7da;
            color: #721c24;
        }
        [data-theme="dark"] .stock-badge.in-stock {
            background: #1e3a2a;
            color: #8fdfb0;
        }
        [data-theme="dark"] .stock-badge.low-stock {
            background: #3d2e1a;
            color: #ffd966;
        }
        [data-theme="dark"] .stock-badge.out-of-stock {
            background: #3a1a1a;
            color: #f5a0a0;
        }

        .card-actions {
            display: flex;
            gap: 8px;
            width: 100%;
        }
        .card-actions .btn-add {
            flex: 1;
            padding: 8px 12px;
            border: none;
            border-radius: var(--radius-sm);
            background: var(--primary);
            color: #fff;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            transition: all var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }
        .card-actions .btn-add:hover:not(:disabled) {
            opacity: 0.85;
            transform: scale(0.98);
        }
        .card-actions .btn-add:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .card-actions .btn-edit {
            padding: 8px 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--surface2);
            color: var(--text);
            cursor: pointer;
            transition: all var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card-actions .btn-edit:hover {
            background: var(--border);
        }

        .empty-products,
        .empty-orders {
            grid-column: 1 / -1;
            text-align: center;
            padding: 48px 20px;
            color: var(--text2);
        }
        .empty-products .empty-icon,
        .empty-orders .empty-icon {
            font-size: 56px;
            color: var(--border);
            margin-bottom: 12px;
        }

        /* ---- PROFILE ---- */
        .profile-card {
            max-width: 520px;
            margin: 0 auto;
            text-align: center;
        }
        .profile-card .avatar {
            position: relative;
            width: 100px;
            height: 100px;
            margin: 0 auto 12px;
            border-radius: 50%;
            background: var(--primary-light);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            color: #fff;
        }
        .profile-card .avatar-edit-btn {
            position: absolute;
            bottom: 2px;
            right: 2px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
            color: var(--text);
        }
        .profile-card .profile-name {
            font-size: 22px;
            font-weight: 700;
        }
        .profile-card .profile-role {
            color: var(--text2);
            margin-bottom: 16px;
        }
        .profile-card .profile-detail {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid var(--border);
            font-size: 14px;
        }
        .profile-card .profile-detail .label {
            color: var(--text2);
        }
        .profile-card .btn-primary {
            width: auto;
            margin-top: 16px;
        }

        /* ---- SETTINGS ---- */
        .settings-card {
            max-width: 600px;
            margin: 0 auto;
        }
        .setting-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
            border-bottom: 1px solid var(--border);
        }
        .setting-group .setting-label h4 {
            font-size: 15px;
            font-weight: 600;
        }
        .setting-group .setting-label p {
            font-size: 13px;
            color: var(--text2);
        }
        .toggle-switch {
            width: 48px;
            height: 26px;
            background: var(--border);
            border-radius: 30px;
            cursor: pointer;
            transition: all var(--transition);
            position: relative;
            flex-shrink: 0;
        }
        .toggle-switch::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 50%;
            transition: all var(--transition);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .toggle-switch.active {
            background: var(--primary);
        }
        .toggle-switch.active::after {
            left: 25px;
        }

        /* ---- NOTIFICATIONS ---- */
        .notifications-card {
            max-width: 640px;
            margin: 0 auto;
        }
        .notifications-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }
        .notifications-header h3 {
            font-size: 18px;
        }
        .notification-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 14px 0;
            border-bottom: 1px solid var(--border);
            cursor: pointer;
            transition: all var(--transition);
        }
        .notification-item:hover {
            background: var(--surface2);
            margin: 0 -12px;
            padding: 14px 12px;
            border-radius: var(--radius-sm);
        }
        .notification-item .notif-icon {
            font-size: 24px;
            color: var(--primary);
            flex-shrink: 0;
        }
        .notification-item .notif-content {
            flex: 1;
        }
        .notification-item .notif-content h4 {
            font-size: 14px;
            font-weight: 600;
        }
        .notification-item .notif-content p {
            font-size: 13px;
            color: var(--text2);
        }
        .notification-item .notif-time {
            font-size: 12px;
            color: var(--text2);
            flex-shrink: 0;
        }
        .notification-item.read {
            opacity: 0.6;
        }
        .notification-item.read .notif-content h4 {
            font-weight: 400;
        }

        /* ---- RESPONSIVE ---- */
        @media (min-width: 769px) {
            #sidebar {
                transform: translateX(0) !important;
                position: sticky;
                top: 0;
                height: 100vh;
                width: 260px;
                flex-shrink: 0;
            }
            #sidebarOverlay {
                display: none !important;
            }
            #main {
                margin-left: 0;
            }
            .topnav-left .menu-btn {
                display: none;
            }
        }

        @media (max-width: 768px) {
            #main {
                padding: 0 16px 30px;
            }
            .topnav-right .search-input {
                width: 130px;
                font-size: 13px;
                padding: 6px 14px;
            }
            .topnav-left h1 {
                font-size: 18px;
            }
            .stats-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 12px;
            }
            .stat-card {
                padding: 14px;
            }
            .stat-card .stat-info h3 {
                font-size: 20px;
            }
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 12px;
            }
            .login-container {
                padding: 24px 20px;
                margin: 20px auto;
            }
            .invoice-totals .total-row {
                width: 200px;
            }
            .profile-card {
                padding: 16px;
            }
            .settings-card {
                padding: 16px;
            }
            .notifications-card {
                padding: 16px;
            }
            .orders-toolbar,
            .products-toolbar {
                flex-direction: column;
                align-items: stretch;
            }
            .orders-toolbar .search-input,
            .products-toolbar .search-input {
                width: 100%;
            }
            .pagination {
                justify-content: center;
            }
            .topnav-right .icon-btn,
            .topnav-right .theme-btn {
                width: 36px;
                height: 36px;
                font-size: 18px;
            }
            #currentDate {
                font-size: 12px;
            }
        }
        @media (max-width: 480px) {
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            }
            .stats-grid {
                grid-template-columns: 1fr 1fr;
            }
            .invoice-actions button {
                padding: 8px 14px;
                font-size: 13px;
            }
            .invoice-actions button span {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>

    <!-- ============================================================
    SIDEBAR
    ============================================================ -->
    <aside id="sidebar">
        <div class="brand">
            <span class="material-symbols-outlined">storefront</span>
            UdharKart
        </div>
        <ul class="sidebar-nav">
            <li><a class="nav-link active" data-view="customer-dashboard"><span class="material-symbols-outlined">dashboard</span> Dashboard</a></li>
            <li><a class="nav-link" data-view="orders"><span class="material-symbols-outlined">receipt</span> Orders <span class="badge">3</span></a></li>
            <li><a class="nav-link" data-view="products"><span class="material-symbols-outlined">inventory_2</span> Products</a></li>
            <li><a class="nav-link" data-view="billing"><span class="material-symbols-outlined">receipt_long</span> Billing</a></li>
            <li><a class="nav-link" data-view="profile"><span class="material-symbols-outlined">account_circle</span> Profile</a></li>
            <li><a class="nav-link" data-view="settings"><span class="material-symbols-outlined">settings</span> Settings</a></li>
            <li><a class="nav-link" data-view="notifications"><span class="material-symbols-outlined">notifications</span> Notifications <span class="badge-dot" style="display:block;"></span></a></li>
            <li style="margin-top:12px;border-top:1px solid var(--border);padding-top:12px;">
                <a class="nav-link" data-view="customer-login"><span class="material-symbols-outlined">login</span> Customer Login</a>
            </li>
            <li>
                <a class="nav-link" data-view="shopkeeper-login"><span class="material-symbols-outlined">store</span> Shopkeeper Login</a>
            </li>
            <li>
                <a class="nav-link" data-view="shopkeeper-dashboard"><span class="material-symbols-outlined">storefront</span> Shop Dashboard</a>
            </li>
        </ul>
        <div class="sidebar-footer">© 2026 UdharKart v1.0</div>
    </aside>

    <!-- OVERLAY -->
    <div id="sidebarOverlay"></div>

    <!-- ============================================================
    MAIN
    ============================================================ -->
    <div id="main">

        <!-- TOPNAV -->
        <header class="topnav">
            <div class="topnav-left">
                <button id="sidebarToggle" class="menu-btn" aria-label="Toggle sidebar">
                    <span class="material-symbols-outlined">menu</span>
                </button>
                <h1 id="pageTitle">Dashboard</h1>
            </div>
            <div class="topnav-right">
                <span id="currentDate"></span>
                <input type="text" class="search-input" placeholder="Search..." id="globalSearch" />
                <button id="themeToggle" class="theme-btn" aria-label="Toggle theme">
                    <span id="themeIcon" class="material-symbols-outlined">dark_mode</span>
                </button>
            </div>
        </header>

        <!-- TOAST CONTAINER -->
        <div id="toastContainer"></div>

        <!-- ============================================================
        PAGE VIEWS
        ============================================================ -->

        <!-- ---------- CUSTOMER DASHBOARD ---------- -->
        <div id="view-customer-dashboard" class="page-view active">
            <div class="stats-grid">
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">shopping_cart</div><div class="stat-info"><h3>₹12,450</h3><p>Total Spent</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">receipt</div><div class="stat-info"><h3>8</h3><p>Orders</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">local_shipping</div><div class="stat-info"><h3>2</h3><p>Pending</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">favorite</div><div class="stat-info"><h3>14</h3><p>Wishlist</p></div></div>
            </div>
            <h3 style="margin-bottom:12px;">Quick Actions</h3>
            <div class="actions-grid">
                <button class="action-btn"><span class="material-symbols-outlined">add_shopping_cart</span><span>New Order</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">search</span><span>Browse</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">receipt_long</span><span>Billing</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">support_agent</span><span>Support</span></button>
            </div>
        </div>

        <!-- ---------- SHOPKEEPER DASHBOARD ---------- -->
        <div id="view-shopkeeper-dashboard" class="page-view">
            <div class="stats-grid">
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">store</div><div class="stat-info"><h3>₹84,200</h3><p>Revenue</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">receipt</div><div class="stat-info"><h3>142</h3><p>Orders</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">pending</div><div class="stat-info"><h3>12</h3><p>Pending</p></div></div>
                <div class="stat-card"><div class="stat-icon material-symbols-outlined">inventory_2</div><div class="stat-info"><h3>48</h3><p>Products</p></div></div>
            </div>
            <h3 style="margin-bottom:12px;">Quick Actions</h3>
            <div class="actions-grid">
                <button class="action-btn"><span class="material-symbols-outlined">add</span><span>Add Product</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">receipt</span><span>New Order</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">print</span><span>Invoice</span></button>
                <button class="action-btn"><span class="material-symbols-outlined">analytics</span><span>Reports</span></button>
            </div>
        </div>

        <!-- ---------- ORDERS ---------- -->
        <div id="view-orders" class="page-view">
            <div class="orders-toolbar">
                <input type="text" id="searchOrders" class="search-input" placeholder="Search orders..." />
                <select id="statusFilter"><option value="all">All Status</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="shipped">Shipped</option><option value="completed">Completed</option><option value="delivered">Delivered</option><option value="cancelled">Cancelled</option><option value="refunded">Refunded</option></select>
                <select id="dateFilter"><option value="all">All Dates</option><option value="today">Today</option><option value="week">This Week</option><option value="month">This Month</option><option value="custom">Custom</option></select>
                <input type="date" id="dateFrom" style="display:none;width:140px;" />
                <input type="date" id="dateTo" style="display:none;width:140px;" />
                <button id="resetFilters" class="btn-secondary">Reset</button>
                <button id="newOrderBtn" class="btn-secondary" style="background:var(--primary);color:#fff;border-color:var(--primary);">+ New Order</button>
                <button id="exportBtn" class="btn-secondary">Export</button>
            </div>
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th><th style="text-align:center;">Actions</th></tr></thead>
                    <tbody id="ordersBody"></tbody>
                </table>
            </div>
            <div class="pagination">
                <button id="prevPage" disabled>‹</button>
                <div class="pages">
                    <button data-page="1" class="active">1</button>
                    <button data-page="2">2</button>
                    <button data-page="3">3</button>
                </div>
                <button id="nextPage">›</button>
                <span id="paginationInfo">Showing 1–5 of 12 orders</span>
            </div>
        </div>

        <!-- ---------- PRODUCTS ---------- -->
        <div id="view-products" class="page-view">
            <div class="products-toolbar">
                <input type="text" id="searchProducts" class="search-input" placeholder="Search products..." />
                <select id="categoryFilter"><option value="all">All Categories</option><option value="groceries">Groceries</option><option value="dairy">Dairy</option><option value="beverages">Beverages</option><option value="snacks">Snacks</option><option value="personal-care">Personal Care</option><option value="household">Household</option></select>
                <select id="stockFilter"><option value="all">All Stock</option><option value="in-stock">In Stock</option><option value="low-stock">Low Stock</option><option value="out-of-stock">Out of Stock</option></select>
                <select id="sortFilter"><option value="name-asc">Name A–Z</option><option value="name-desc">Name Z–A</option><option value="price-asc">Price: Low → High</option><option value="price-desc">Price: High → Low</option></select>
                <button id="resetFilters" class="btn-secondary">Reset</button>
                <button id="addProductBtn" class="btn-secondary" style="background:var(--primary);color:#fff;border-color:var(--primary);">+ Add Product</button>
                <button id="exportProductsBtn" class="btn-secondary">Export</button>
            </div>
            <div id="productsGrid" class="products-grid"></div>
        </div>

        <!-- ---------- BILLING ---------- -->
        <div id="view-billing" class="page-view">
            <div class="invoice-actions">
                <button id="backBtn"><span class="material-symbols-outlined">arrow_back</span> Back</button>
                <button id="newInvoiceBtn"><span class="material-symbols-outlined">receipt</span> New Invoice</button>
                <button id="printBtn"><span class="material-symbols-outlined">print</span> Print</button>
                <button id="downloadBtn"><span class="material-symbols-outlined">download</span> Download PDF</button>
                <button id="sendBtn"><span class="material-symbols-outlined">send</span> Email</button>
            </div>
            <div id="invoiceContent" class="glass-card" style="max-width:720px;margin:0 auto;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <div><span style="font-size:24px;font-weight:700;color:var(--primary);">UdharKart</span><br /><span style="font-size:13px;color:var(--text2);">Invoice #INV-2026-001</span></div>
                    <div style="text-align:right;font-size:14px;color:var(--text2);">Date: <span id="invDate">26 Jul 2026</span></div>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border);">
                    <div><strong>Bill To:</strong><br />Priya Patel<br />+91 98765 43201<br />priya@example.com</div>
                    <div style="text-align:right;"><strong>Order #</strong><br />UDH-001</div>
                </div>
                <table class="invoice-table">
                    <thead><tr><th>Item</th><th>Price</th><th>Qty</th><th style="text-align:right;">Total</th></tr></thead>
                    <tbody id="invoiceItemsBody"></tbody>
                </table>
                <div class="invoice-totals">
                    <div class="total-row"><span>Subtotal</span><span id="invSubtotal">₹0</span></div>
                    <div class="total-row"><span>Shipping</span><span id="invShipping">₹0</span></div>
                    <div class="total-row" id="invDiscountRow" style="display:none;"><span>Discount (10%)</span><span id="invDiscount">-₹0</span></div>
                    <div class="total-row grand"><span>Grand Total</span><span id="invGrandTotal">₹0</span></div>
                </div>
                <div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--border);font-size:13px;color:var(--text2);text-align:center;">Thank you for your business! ❤️</div>
            </div>
        </div>

        <!-- ---------- PROFILE ---------- -->
        <div id="view-profile" class="page-view">
            <div class="profile-card glass-card">
                <div class="avatar">
                    <span class="material-symbols-outlined" style="font-size:52px;">person</span>
                    <button class="avatar-edit-btn"><span class="material-symbols-outlined" style="font-size:16px;">photo_camera</span></button>
                </div>
                <div class="profile-name">Priya Patel</div>
                <div class="profile-role">Customer</div>
                <div class="profile-detail"><span class="label">Email</span><span>priya@example.com</span></div>
                <div class="profile-detail"><span class="label">Phone</span><span>+91 98765 43201</span></div>
                <div class="profile-detail"><span class="label">Joined</span><span>Jan 2025</span></div>
                <button class="btn-primary">Edit Profile</button>
            </div>
        </div>

        <!-- ---------- SETTINGS ---------- -->
        <div id="view-settings" class="page-view">
            <div class="settings-card glass-card">
                <h3 style="margin-bottom:16px;">Settings</h3>
                <div class="setting-group"><div class="setting-label"><h4>Dark Mode</h4><p>Switch between light and dark theme</p></div><div id="settingsThemeToggle" class="toggle-switch"></div></div>
                <div class="setting-group"><div class="setting-label"><h4>Email Notifications</h4><p>Receive order updates via email</p></div><div class="toggle-switch active"></div></div>
                <div class="setting-group"><div class="setting-label"><h4>Push Notifications</h4><p>Get real-time alerts on your device</p></div><div class="toggle-switch"></div></div>
                <div class="setting-group"><div class="setting-label"><h4>SMS Alerts</h4><p>Receive SMS for order status</p></div><div class="toggle-switch"></div></div>
                <div class="setting-group"><div class="setting-label"><h4>Privacy</h4><p>Manage your data and privacy settings</p></div><button class="btn-secondary">Manage</button></div>
            </div>
        </div>

        <!-- ---------- NOTIFICATIONS ---------- -->
        <div id="view-notifications" class="page-view">
            <div class="notifications-card glass-card">
                <div class="notifications-header">
                    <h3>Notifications</h3>
                    <button id="markAllRead" class="btn-secondary" style="padding:6px 16px;font-size:13px;">Mark all as read</button>
                </div>
                <div class="notification-item">
                    <span class="notif-icon material-symbols-outlined">local_shipping</span>
                    <div class="notif-content"><h4>Order #UDH-003 shipped</h4><p>Your order has been dispatched and will arrive soon.</p></div>
                    <span class="notif-time">2 min ago</span>
                </div>
                <div class="notification-item">
                    <span class="notif-icon material-symbols-outlined">check_circle</span>
                    <div class="notif-content"><h4>Payment received</h4><p>₹2,450 credited to your account for order #UDH-001.</p></div>
                    <span class="notif-time">1 hour ago</span>
                </div>
                <div class="notification-item">
                    <span class="notif-icon material-symbols-outlined">discount</span>
                    <div class="notif-content"><h4>Special offer!</h4><p>Get 15% off on your next order above ₹500.</p></div>
                    <span class="notif-time">3 hours ago</span>
                </div>
                <div class="notification-item">
                    <span class="notif-icon material-symbols-outlined">feedback</span>
                    <div class="notif-content"><h4>Review request</h4><p>How was your recent purchase? Share your feedback.</p></div>
                    <span class="notif-time">Yesterday</span>
                </div>
                <div class="notification-item">
                    <span class="notif-icon material-symbols-outlined">inventory_2</span>
                    <div class="notif-content"><h4>Back in stock</h4><p>Basmati Rice (5kg) is now back in stock.</p></div>
                    <span class="notif-time">2 days ago</span>
                </div>
            </div>
        </div>

        <!-- ---------- CUSTOMER LOGIN ---------- -->
        <div id="view-customer-login" class="page-view">
            <div class="login-container">
                <h2>Customer Login</h2>
                <p class="sub">Access your UdharKart account</p>
                <form id="customerLoginForm">
                    <div class="form-group"><label>Email</label><input type="email" id="custEmail" placeholder="you@example.com" value="priya@example.com" /></div>
                    <div class="form-group"><label>Password</label><div class="password-wrap"><input type="password" id="custPassword" placeholder="••••••••" value="password123" /><button type="button" class="toggle-password"><span class="material-symbols-outlined">visibility</span></button></div></div>
                    <button type="submit" class="btn-primary">Sign In</button>
                </form>
                <div class="login-footer">Don't have an account? <a href="#">Sign up</a></div>
            </div>
        </div>

        <!-- ---------- SHOPKEEPER LOGIN ---------- -->
        <div id="view-shopkeeper-login" class="page-view">
            <div class="login-container">
                <h2>Shopkeeper Login</h2>
                <p class="sub">Manage your store with UdharKart</p>
                <form id="shopkeeperLoginForm">
                    <div class="form-group"><label>Shop Name</label><input type="text" id="shopName" placeholder="My Store" value="Priya Grocery" /></div>
                    <div class="form-group"><label>Email</label><input type="email" id="shopEmail" placeholder="shop@example.com" value="shop@priya.in" /></div>
                    <div class="form-group"><label>Password</label><div class="password-wrap"><input type="password" id="shopPassword" placeholder="••••••••" value="store123" /><button type="button" class="toggle-password"><span class="material-symbols-outlined">visibility</span></button></div></div>
                    <button type="submit" class="btn-primary">Sign In</button>
                </form>
                <div class="login-footer">New shopkeeper? <a href="#">Register</a></div>
            </div>
        </div>

    </div><!-- /main -->

    <!-- ============================================================
    COMBINED JAVASCRIPT — all modules in one file
    ============================================================ -->
    <script>
        /* =============================================================
           UDHARKART — app.js (core)
           ============================================================= */
        (function() {
            'use strict';

            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const toggleBtn = document.getElementById('sidebarToggle');
            const themeToggle = document.getElementById('themeToggle');
            const settingsThemeToggle = document.getElementById('settingsThemeToggle');
            const themeIcon = document.getElementById('themeIcon');
            const pageTitle = document.getElementById('pageTitle');
            const allViews = document.querySelectorAll('.page-view');
            const allNavLinks = document.querySelectorAll('.nav-link');
            const toastContainer = document.getElementById('toastContainer');

            let currentView = 'customer-dashboard';
            let isDark = false;
            let isSidebarOpen = false;

            function setTheme(dark) {
                isDark = dark;
                document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                if (themeIcon) themeIcon.textContent = dark ? 'light_mode' : 'dark_mode';
                if (settingsThemeToggle) {
                    if (dark) settingsThemeToggle.classList.add('active');
                    else settingsThemeToggle.classList.remove('active');
                }
            }

            function toggleTheme() { setTheme(!isDark); }

            function navigateTo(viewId) {
                allViews.forEach(v => v.classList.remove('active'));
                const target = document.getElementById('view-' + viewId);
                if (target) { target.classList.add('active');
                    currentView = viewId; }
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-view') === viewId) link.classList.add('active');
                });
                const titles = {
                    'customer-dashboard': 'Dashboard',
                    'shopkeeper-dashboard': 'Dashboard',
                    'profile': 'Profile',
                    'settings': 'Settings',
                    'notifications': 'Notifications',
                    'customer-login': 'Customer Login',
                    'shopkeeper-login': 'Shopkeeper Login',
                    'orders': 'Orders',
                    'products': 'Products',
                    'billing': 'Billing'
                };
                if (pageTitle) pageTitle.textContent = titles[viewId] || 'UdharKart';
                closeSidebar();
                if (history.pushState) { history.pushState(null, '', '#' + viewId); }
            }

            function openSidebar() {
                if (sidebar) sidebar.classList.add('open');
                if (overlay) overlay.classList.add('active');
                isSidebarOpen = true;
                document.body.style.overflow = 'hidden';
            }

            function closeSidebar() {
                if (sidebar) sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
                isSidebarOpen = false;
                document.body.style.overflow = '';
            }

            function toggleSidebar() { isSidebarOpen ? closeSidebar() : openSidebar(); }

            function showToast(message, icon) {
                if (!toastContainer) return;
                const toast = document.createElement('div');
                toast.className = 'toast';
                toast.innerHTML =
                    `<span class="material-symbols-outlined">${icon||'info'}</span><span>${message}</span>`;
                toastContainer.appendChild(toast);
                setTimeout(() => {
                    toast.classList.add('hide');
                    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 300);
                }, 3000);
            }

            function updateDate() {
                const now = new Date();
                const opts = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
                const dateStr = now.toLocaleDateString('en-IN', opts);
                document.querySelectorAll('#currentDate, #currentDateShop').forEach(el => { if (el) el.textContent =
                    dateStr; });
            }

            // --- events ---
            if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
            if (overlay) overlay.addEventListener('click', closeSidebar);
            if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
            if (settingsThemeToggle) settingsThemeToggle.addEventListener('click', toggleTheme);

            allNavLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const view = this.getAttribute('data-view');
                    if (view) navigateTo(view);
                });
            });

            function handleHash() {
                const hash = window.location.hash.replace('#', '');
                if (hash) {
                    const viewEl = document.getElementById('view-' + hash);
                    if (viewEl) { navigateTo(hash); return; }
                }
                if (currentView !== 'customer-login' && currentView !== 'shopkeeper-login') {
                    navigateTo('customer-dashboard');
                }
            }
            window.addEventListener('hashchange', handleHash);

            let resizeTimer;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    if (window.innerWidth > 768 && isSidebarOpen) closeSidebar();
                }, 200);
            });

            // --- global search ---
            const globalSearch = document.getElementById('globalSearch');
            if (globalSearch) {
                globalSearch.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        const val = this.value.trim();
                        if (val && window.udhar) { window.udhar.showToast('Searching for "' + val +
                            '" (demo)', 'search'); }
                    }
                });
            }

            // --- init ---
            function init() {
                updateDate();
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark);
                const hash = window.location.hash.replace('#', '');
                if (hash) {
                    const viewEl = document.getElementById('view-' + hash);
                    if (viewEl) { navigateTo(hash); return; }
                }
                const activeView = document.querySelector('.page-view.active');
                if (activeView) {
                    const id = activeView.id.replace('view-', '');
                    currentView = id;
                    allNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-view') === id) link.classList.add('active');
                    });
                    if (pageTitle) {
                        const titles = {
                            'customer-dashboard': 'Dashboard',
                            'shopkeeper-dashboard': 'Dashboard',
                            'profile': 'Profile',
                            'settings': 'Settings',
                            'notifications': 'Notifications',
                            'customer-login': 'Customer Login',
                            'shopkeeper-login': 'Shopkeeper Login',
                            'orders': 'Orders',
                            'products': 'Products',
                            'billing': 'Billing'
                        };
                        pageTitle.textContent = titles[id] || 'UdharKart';
                    }
                } else {
                    navigateTo('customer-dashboard');
                }
                if (!currentView.includes('login')) {
                    setTimeout(() => { showToast('Welcome to UdharKart', 'storefront'); }, 600);
                }
            }

            window.udhar = {
                showToast,
                navigateTo,
                setTheme,
                toggleTheme,
                getCurrentView: () => currentView,
                isDark: () => isDark
            };

            document.addEventListener('DOMContentLoaded', init);
            if (document.readyState === 'complete' || document.readyState === 'interactive') { init(); }

        })();


        /* =============================================================
           UDHARKART — auth.js
           ============================================================= */
        (function() {
            'use strict';

            const customerForm = document.getElementById('customerLoginForm');
            if (customerForm) {
                customerForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = document.getElementById('custEmail').value.trim();
                    const password = document.getElementById('custPassword').value.trim();
                    if (!email || !password) {
                        if (window.udhar) { window.udhar.showToast('Please fill in all fields', 'error'); } else { alert(
                                'Please fill in all fields'); }
                        return;
                    }
                    if (window.udhar) { window.udhar.showToast('Welcome back, ' + (email.split('@')[0] ||
                        'Customer') + '!', 'check_circle'); }
                    setTimeout(() => {
                        if (window.udhar) { window.udhar.navigateTo('customer-dashboard'); } else { window
                                .location.hash = 'customer-dashboard'; }
                    }, 400);
                });
            }

            const shopkeeperForm = document.getElementById('shopkeeperLoginForm');
            if (shopkeeperForm) {
                shopkeeperForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const shopName = document.getElementById('shopName').value.trim();
                    const email = document.getElementById('shopEmail').value.trim();
                    const password = document.getElementById('shopPassword').value.trim();
                    if (!shopName || !email || !password) {
                        if (window.udhar) { window.udhar.showToast('Please fill in all fields', 'error'); } else { alert(
                                'Please fill in all fields'); }
                        return;
                    }
                    if (window.udhar) { window.udhar.showToast('Welcome back, ' + shopName + '!', 'check_circle'); }
                    setTimeout(() => {
                        if (window.udhar) { window.udhar.navigateTo('shopkeeper-dashboard'); } else { window
                                .location.hash = 'shopkeeper-dashboard'; }
                    }, 400);
                });
            }

            document.querySelectorAll('.toggle-password').forEach(btn => {
                btn.addEventListener('click', function() {
                    const input = this.closest('.password-wrap').querySelector('input');
                    if (input) {
                        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                        input.setAttribute('type', type);
                        this.querySelector('.material-symbols-outlined').textContent =
                            type === 'password' ? 'visibility' : 'visibility_off';
                    }
                });
            });

        })();


        /* =============================================================
           UDHARKART — billing.js
           ============================================================= */
        (function() {
            'use strict';

            const invoiceItems = [
                { name: 'Basmati Rice (5kg)', price: 350, qty: 2 },
                { name: 'Wheat Flour (5kg)', price: 220, qty: 1 },
                { name: 'Milk (1L)', price: 56, qty: 4 },
                { name: 'Coca-Cola (2L)', price: 90, qty: 3 },
                { name: 'Lays (50g)', price: 20, qty: 5 },
            ];
            const SHIPPING_COST = 40;
            let discountApplied = true;

            const invoiceItemsBody = document.getElementById('invoiceItemsBody');
            const invSubtotal = document.getElementById('invSubtotal');
            const invShipping = document.getElementById('invShipping');
            const invDiscountRow = document.getElementById('invDiscountRow');
            const invDiscount = document.getElementById('invDiscount');
            const invGrandTotal = document.getElementById('invGrandTotal');

            function formatPrice(amount) { return '₹' + amount.toLocaleString('en-IN'); }

            function getSubtotal() { return invoiceItems.reduce((s, i) => s + i.price * i.qty, 0); }

            function getShipping() { return getSubtotal() >= 500 ? 0 : SHIPPING_COST; }

            function getDiscount() { return discountApplied ? Math.round(getSubtotal() * 0.10) : 0; }

            function getGrandTotal() { return getSubtotal() + getShipping() - getDiscount(); }

            function renderInvoice() {
                if (!invoiceItemsBody) return;
                let html = '';
                invoiceItems.forEach(item => {
                    const total = item.price * item.qty;
                    html +=
                        `<tr><td class="item-name">${item.name}</td><td class="item-price">${formatPrice(item.price)}</td><td class="item-qty">${item.qty}</td><td class="item-total" style="text-align:right;">${formatPrice(total)}</td></tr>`;
                });
                invoiceItemsBody.innerHTML = html;
                const subtotal = getSubtotal(),
                    shipping = getShipping(),
                    discount = getDiscount(),
                    grandTotal = getGrandTotal();
                if (invSubtotal) invSubtotal.textContent = formatPrice(subtotal);
                if (invShipping) invShipping.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
                if (invDiscountRow && invDiscount) {
                    if (discount > 0) { invDiscountRow.style.display = 'flex';
                        invDiscount.textContent = '-' + formatPrice(discount); } else { invDiscountRow.style.display =
                        'none'; }
                }
                if (invGrandTotal) invGrandTotal.textContent = formatPrice(grandTotal);
            }

            document.getElementById('backBtn')?.addEventListener('click', function() { window.history.back(); });
            document.getElementById('newInvoiceBtn')?.addEventListener('click', function() {
                if (window.udhar) window.udhar.showToast('Creating new invoice...', 'receipt');
            });
            document.getElementById('printBtn')?.addEventListener('click', function() {
                const content = document.getElementById('invoiceContent');
                if (!content) return;
                const clone = content.cloneNode(true);
                const printWindow = window.open('', '_blank', 'width=800,height=600');
                if (printWindow) {
                    const styles = document.querySelector('style')?.innerHTML || '';
                    printWindow.document.write(
                        `<html><head><title>Invoice</title><style>${styles}</style><style>body{padding:40px;background:#fff}.glass-card{background:#fff;box-shadow:none;border:1px solid #e5e7eb}.invoice-actions,.no-print{display:none!important}</style></head><body>${clone.outerHTML}<script>window.onload=function(){window.print();window.close()};<\/script></body></html>`
                        );
                    printWindow.document.close();
                    if (window.udhar) window.udhar.showToast('Printing invoice...', 'print');
                } else {
                    if (window.udhar) window.udhar.showToast('Please allow popups to print', 'error');
                }
            });
            document.getElementById('downloadBtn')?.addEventListener('click', function() {
                if (window.udhar) {
                    window.udhar.showToast('Downloading invoice as PDF...', 'download');
                    setTimeout(() => { window.udhar.showToast('Invoice downloaded successfully!', 'check_circle'); },
                    1000);
                }
            });
            document.getElementById('sendBtn')?.addEventListener('click', function() {
                if (window.udhar) {
                    window.udhar.showToast('Sending invoice via email...', 'send');
                    setTimeout(() => { window.udhar.showToast('Invoice sent to priya@example.com 📧',
                        'check_circle'); }, 1200);
                }
            });

            // Set invoice date
            const invDateEl = document.getElementById('invDate');
            if (invDateEl) {
                const d = new Date();
                invDateEl.textContent = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short',
                year: 'numeric' });
            }

            renderInvoice();

        })();


        /* =============================================================
           UDHARKART — customer.js & shopkeeper.js (merged dashboard interactions)
           ============================================================= */
        (function() {
            'use strict';

            // ---- Customer dashboard quick actions ----
            document.querySelectorAll('#view-customer-dashboard .action-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const label = this.querySelector('span:last-child')?.textContent || 'Action';
                    if (window.udhar) window.udhar.showToast(label + ' triggered (demo)', 'bolt');
                });
            });

            // ---- Shopkeeper dashboard quick actions ----
            document.querySelectorAll('#view-shopkeeper-dashboard .action-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const label = this.querySelector('span:last-child')?.textContent || 'Action';
                    if (window.udhar) window.udhar.showToast(label + ' triggered (demo)', 'bolt');
                });
            });

            // ---- Profile edit (shared) ----
            const editProfileBtn = document.querySelector('#view-profile .profile-card .btn-primary');
            if (editProfileBtn) {
                editProfileBtn.addEventListener('click', function() {
                    if (window.udhar) window.udhar.showToast('Edit profile form would open here', 'edit');
                });
            }
            const avatarEditBtn = document.querySelector('.avatar-edit-btn');
            if (avatarEditBtn) {
                avatarEditBtn.addEventListener('click', function() {
                    if (window.udhar) window.udhar.showToast('Change avatar dialog would open', 'photo_camera');
                });
            }

            // ---- Settings toggles (shared) ----
            document.querySelectorAll('#view-settings .toggle-switch:not(#settingsThemeToggle)').forEach(sw => {
                sw.addEventListener('click', function() {
                    this.classList.toggle('active');
                    const isActive = this.classList.contains('active');
                    const label = this.closest('.setting-group').querySelector('.setting-label h4');
                    if (label && window.udhar) {
                        window.udhar.showToast(label.textContent + ' ' + (isActive ? 'enabled' :
                        'disabled'), 'toggle_on');
                    }
                });
            });

            // ---- Settings "Manage" button ----
            document.querySelector('#view-settings .setting-group .btn-secondary')?.addEventListener('click',
            function() {
                if (window.udhar) window.udhar.showToast('Privacy settings management', 'privacy_tip');
            });

            // ---- Notifications: Mark all as read ----
            const markAllReadBtn = document.getElementById('markAllRead');
            if (markAllReadBtn) {
                markAllReadBtn.addEventListener('click', function() {
                    const items = document.querySelectorAll('.notification-item');
                    let count = 0;
                    items.forEach(item => {
                        if (!item.classList.contains('read')) { item.classList.add('read');
                            count++; }
                    });
                    const badge = document.querySelector('.sidebar-nav .badge');
                    if (badge) {
                        const remaining = document.querySelectorAll('.notification-item:not(.read)').length;
                        if (remaining > 0) { badge.textContent = remaining; } else { badge.textContent = '0';
                            badge.style.display = 'none'; }
                    }
                    const dot = document.querySelector('.badge-dot');
                    if (dot) {
                        const unread = document.querySelectorAll('.notification-item:not(.read)').length;
                        dot.style.display = unread > 0 ? 'block' : 'none';
                    }
                    if (window.udhar) {
                        if (count > 0) {
                            window.udhar.showToast('Marked ' + count + ' notification' + (count > 1 ? 's' :
                                '') + ' as read', 'check_circle');
                        } else {
                            window.udhar.showToast('All notifications already read', 'info');
                        }
                    }
                });
            }

            // ---- Notifications: single item click ----
            document.querySelectorAll('.notification-item').forEach(item => {
                item.addEventListener('click', function() {
                    if (!this.classList.contains('read')) {
                        this.classList.add('read');
                        const remaining = document.querySelectorAll('.notification-item:not(.read)').length;
                        const badge = document.querySelector('.sidebar-nav .badge');
                        if (badge) {
                            if (remaining > 0) { badge.textContent = remaining;
                                badge.style.display = ''; } else { badge.textContent = '0';
                                badge.style.display = 'none'; }
                        }
                        const dot = document.querySelector('.badge-dot');
                        if (dot) { dot.style.display = remaining > 0 ? 'block' : 'none'; }
                        if (window.udhar) window.udhar.showToast('Marked as read', 'done');
                    }
                });
            });

        })();


        /* =============================================================
           UDHARKART — orders.js
           ============================================================= */
        (function() {
            'use strict';

            const ordersData = [
                { id: 'UDH-001', customer: 'Priya Patel', phone: '+91 98765 43201', date: '2026-07-20',
                amount: 2450, status: 'completed' },
                { id: 'UDH-002', customer: 'Amit Kumar', phone: '+91 98765 43202', date: '2026-07-21',
                amount: 1800, status: 'processing' },
                { id: 'UDH-003', customer: 'Neha Singh', phone: '+91 98765 43203', date: '2026-07-22',
                amount: 3200, status: 'pending' },
                { id: 'UDH-004', customer: 'Rohit Verma', phone: '+91 98765 43204', date: '2026-07-18',
                amount: 750, status: 'shipped' },
                { id: 'UDH-005', customer: 'Sneha Reddy', phone: '+91 98765 43205', date: '2026-07-17',
                amount: 5600, status: 'delivered' },
                { id: 'UDH-006', customer: 'Vikram Joshi', phone: '+91 98765 43206', date: '2026-07-16',
                amount: 2100, status: 'cancelled' },
                { id: 'UDH-007', customer: 'Kavya Nair', phone: '+91 98765 43207', date: '2026-07-15',
                amount: 980, status: 'refunded' },
                { id: 'UDH-008', customer: 'Arjun Mehta', phone: '+91 98765 43208', date: '2026-07-14',
                amount: 4300, status: 'completed' },
                { id: 'UDH-009', customer: 'Divya Menon', phone: '+91 98765 43209', date: '2026-07-13',
                amount: 1650, status: 'processing' },
                { id: 'UDH-010', customer: 'Karan Shah', phone: '+91 98765 43210', date: '2026-07-12',
                amount: 2890, status: 'pending' },
                { id: 'UDH-011', customer: 'Meera Iyer', phone: '+91 98765 43211', date: '2026-07-11',
                amount: 3750, status: 'shipped' },
                { id: 'UDH-012', customer: 'Suresh Goyal', phone: '+91 98765 43212', date: '2026-07-10',
                amount: 1200, status: 'delivered' },
            ];

            const ordersBody = document.getElementById('ordersBody');
            const statusFilter = document.getElementById('statusFilter');
            const dateFilter = document.getElementById('dateFilter');
            const dateFrom = document.getElementById('dateFrom');
            const dateTo = document.getElementById('dateTo');
            const resetFilters = document.getElementById('resetFilters');
            const searchInput = document.getElementById('searchOrders');
            const paginationInfo = document.getElementById('paginationInfo');
            const prevPageBtn = document.getElementById('prevPage');
            const nextPageBtn = document.getElementById('nextPage');
            const pageButtons = document.querySelectorAll('.pages button[data-page]');
            const itemsPerPage = 5;
            let currentPage = 1;

            function formatDate(dateStr) {
                const d = new Date(dateStr + 'T00:00:00');
                return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            }

            function getStatusBadge(status) {
                const map = {
                    'completed': 'completed',
                    'processing': 'processing',
                    'pending': 'pending',
                    'shipped': 'shipped',
                    'delivered': 'delivered',
                    'cancelled': 'cancelled',
                    'refunded': 'refunded'
                };
                const cls = map[status] || 'pending';
                return `<span class="status-badge ${cls}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
            }

            function getFilteredOrders() {
                let filtered = [...ordersData];
                const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
                if (searchTerm) {
                    filtered = filtered.filter(o =>
                        o.id.toLowerCase().includes(searchTerm) ||
                        o.customer.toLowerCase().includes(searchTerm) ||
                        o.phone.includes(searchTerm)
                    );
                }
                const statusVal = statusFilter ? statusFilter.value : 'all';
                if (statusVal !== 'all') { filtered = filtered.filter(o => o.status === statusVal); }
                const dateVal = dateFilter ? dateFilter.value : 'all';
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (dateVal === 'today') {
                    filtered = filtered.filter(o => { const d = new Date(o.date + 'T00:00:00'); return d.getTime() ===
                            today.getTime(); });
                } else if (dateVal === 'week') {
                    const weekStart = new Date(today);
                    weekStart.setDate(today.getDate() - today.getDay());
                    filtered = filtered.filter(o => { const d = new Date(o.date + 'T00:00:00'); return d >= weekStart &&
                            d <= today; });
                } else if (dateVal === 'month') {
                    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                    filtered = filtered.filter(o => { const d = new Date(o.date + 'T00:00:00'); return d >= monthStart &&
                            d <= today; });
                } else if (dateVal === 'custom') {
                    const from = dateFrom ? dateFrom.value : '';
                    const to = dateTo ? dateTo.value : '';
                    if (from) { const fromDate = new Date(from + 'T00:00:00');
                        filtered = filtered.filter(o => { const d = new Date(o.date + 'T00:00:00'); return d >=
                                fromDate; }); }
                    if (to) { const toDate = new Date(to + 'T00:00:00');
                        toDate.setHours(23, 59, 59, 999);
                        filtered = filtered.filter(o => { const d = new Date(o.date + 'T00:00:00'); return d <=
                            toDate; }); }
                }
                return filtered;
            }

            function renderOrders() {
                const filtered = getFilteredOrders();
                const totalItems = filtered.length;
                const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
                if (currentPage > totalPages) currentPage = totalPages;
                if (currentPage < 1) currentPage = 1;
                const start = (currentPage - 1) * itemsPerPage;
                const end = Math.min(start + itemsPerPage, totalItems);
                const pageItems = filtered.slice(start, end);
                if (paginationInfo) {
                    paginationInfo.textContent = totalItems === 0 ? 'No orders found' :
                        `Showing ${start + 1}–${end} of ${totalItems} orders`;
                }
                pageButtons.forEach(btn => {
                    const page = parseInt(btn.dataset.page);
                    btn.classList.toggle('active', page === currentPage);
                    btn.style.display = page <= totalPages ? 'inline-flex' : 'none';
                });
                if (prevPageBtn) prevPageBtn.disabled = currentPage <= 1;
                if (nextPageBtn) nextPageBtn.disabled = currentPage >= totalPages;
                if (!ordersBody) return;
                if (pageItems.length === 0) {
                    ordersBody.innerHTML =
                        `<tr><td colspan="6"><div class="empty-orders"><span class="material-symbols-outlined empty-icon">inbox</span><h4>No orders found</h4><p>Try adjusting your filters or create a new order.</p></div></td></tr>`;
                    return;
                }
                ordersBody.innerHTML = pageItems.map(o =>
                    `<tr><td><span class="order-id">#${o.id}</span></td><td><div class="customer-name">${o.customer}</div><span class="customer-phone">${o.phone}</span></td><td class="date">${formatDate(o.date)}</td><td class="amount">₹${o.amount.toLocaleString('en-IN')}</td><td>${getStatusBadge(o.status)}</td><td style="text-align:center;"><div class="table-actions" style="justify-content:center;"><button class="action-icon view-order" data-id="${o.id}" title="View Order"><span class="material-symbols-outlined">visibility</span></button><button class="action-icon edit-order" data-id="${o.id}" title="Edit Order"><span class="material-symbols-outlined">edit</span></button><button class="action-icon delete delete-order" data-id="${o.id}" title="Delete Order"><span class="material-symbols-outlined">delete</span></button></div></td></tr>`
                ).join('');
                document.querySelectorAll('.view-order').forEach(btn => {
                    btn.addEventListener('click', function() { if (window.udhar) window.udhar.showToast(
                            'Viewing order #' + this.dataset.id, 'visibility'); });
                });
                document.querySelectorAll('.edit-order').forEach(btn => {
                    btn.addEventListener('click', function() { if (window.udhar) window.udhar.showToast(
                            'Editing order #' + this.dataset.id, 'edit'); });
                });
                document.querySelectorAll('.delete-order').forEach(btn => {
                    btn.addEventListener('click', function() { if (window.udhar) window.udhar.showToast(
                            'Order #' + this.dataset.id + ' deleted (demo)', 'delete'); });
                });
            }

            if (statusFilter) statusFilter.addEventListener('change', () => { currentPage = 1;
                renderOrders(); });
            if (dateFilter) {
                dateFilter.addEventListener('change', function() {
                    const isCustom = this.value === 'custom';
                    if (dateFrom) dateFrom.style.display = isCustom ? 'inline-block' : 'none';
                    if (dateTo) dateTo.style.display = isCustom ? 'inline-block' : 'none';
                    currentPage = 1;
                    renderOrders();
                });
            }
            if (dateFrom) dateFrom.addEventListener('change', () => { currentPage = 1;
                renderOrders(); });
            if (dateTo) dateTo.addEventListener('change', () => { currentPage = 1;
                renderOrders(); });
            if (resetFilters) {
                resetFilters.addEventListener('click', function() {
                    if (statusFilter) statusFilter.value = 'all';
                    if (dateFilter) dateFilter.value = 'all';
                    if (dateFrom) { dateFrom.style.display = 'none';
                        dateFrom.value = ''; }
                    if (dateTo) { dateTo.style.display = 'none';
                        dateTo.value = ''; }
                    if (searchInput) searchInput.value = '';
                    currentPage = 1;
                    renderOrders();
                    if (window.udhar) window.udhar.showToast('Filters reset', 'refresh');
                });
            }
            if (searchInput) searchInput.addEventListener('input', () => { currentPage = 1;
                renderOrders(); });
            if (prevPageBtn) {
                prevPageBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--;
                        renderOrders(); } });
            }
            if (nextPageBtn) {
                nextPageBtn.addEventListener('click', () => {
                    const total = Math.max(1, Math.ceil(getFilteredOrders().length / itemsPerPage));
                    if (currentPage < total) { currentPage++;
                        renderOrders(); }
                });
            }
            pageButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const page = parseInt(this.dataset.page);
                    const total = Math.max(1, Math.ceil(getFilteredOrders().length / itemsPerPage));
                    if (page >= 1 && page <= total) { currentPage = page;
                        renderOrders(); }
                });
            });

            document.getElementById('newOrderBtn')?.addEventListener('click', function() {
                if (window.udhar) window.udhar.showToast('New order form would open', 'add');
            });
            document.getElementById('exportBtn')?.addEventListener('click', function() {
                if (window.udhar) window.udhar.showToast('Exporting orders as CSV (demo)', 'download');
            });

            renderOrders();

        })();


        /* =============================================================
           UDHARKART — products.js
           ============================================================= */
        (function() {
            'use strict';

            const productsData = [
                { id: 1, name: 'Basmati Rice (5kg)', category: 'groceries', price: 350, stock: 45,
                icon: 'rice_bowl' },
                { id: 2, name: 'Toor Dal (1kg)', category: 'groceries', price: 120, stock: 28,
                icon: 'lunch_dining' },
                { id: 3, name: 'Wheat Flour (5kg)', category: 'groceries', price: 220, stock: 15,
                icon: 'bakery_dining' },
                { id: 4, name: 'Sugar (1kg)', category: 'groceries', price: 45, stock: 60, icon: 'cookies' },
                { id: 5, name: 'Milk (1L)', category: 'dairy', price: 56, stock: 12, icon: 'no_drinks' },
                { id: 6, name: 'Curd (500g)', category: 'dairy', price: 45, stock: 8, icon: 'cup' },
                { id: 7, name: 'Paneer (200g)', category: 'dairy', price: 80, stock: 3, icon: 'cheese' },
                { id: 8, name: 'Butter (100g)', category: 'dairy', price: 55, stock: 6, icon: 'spa' },
                { id: 9, name: 'Coca-Cola (2L)', category: 'beverages', price: 90, stock: 20,
                icon: 'local_drink' },
                { id: 10, name: 'Pepsi (2L)', category: 'beverages', price: 85, stock: 18, icon: 'local_drink' },
                { id: 11, name: 'Sprite (2L)', category: 'beverages', price: 85, stock: 10, icon: 'local_drink' },
                { id: 12, name: 'Water Bottle (1L)', category: 'beverages', price: 20, stock: 50,
                icon: 'water_drop' },
                { id: 13, name: 'Lays (50g)', category: 'snacks', price: 20, stock: 35, icon: 'fastfood' },
                { id: 14, name: 'Kurkure (50g)', category: 'snacks', price: 20, stock: 22, icon: 'fastfood' },
                { id: 15, name: 'Biscuits (75g)', category: 'snacks', price: 30, stock: 40, icon: 'cookies' },
                { id: 16, name: 'Shampoo (200ml)', category: 'personal-care', price: 180, stock: 7,
                icon: 'shower' },
                { id: 17, name: 'Soap (75g)', category: 'personal-care', price: 35, stock: 30, icon: 'bathtub' },
                { id: 18, name: 'Toothpaste (100g)', category: 'personal-care', price: 85, stock: 14,
                    icon: 'cleaning_services' },
                { id: 19, name: 'Dish Soap (500ml)', category: 'household', price: 65, stock: 9, icon: 'spa' },
                { id: 20, name: 'Floor Cleaner (1L)', category: 'household', price: 120, stock: 4,
                    icon: 'cleaning_services' },
            ];

            const grid = document.getElementById('productsGrid');
            const searchInput = document.getElementById('searchProducts');
            const categoryFilter = document.getElementById('categoryFilter');
            const stockFilter = document.getElementById('stockFilter');
            const sortFilter = document.getElementById('sortFilter');
            const resetBtn = document.getElementById('resetFilters');

            function getStockStatus(stock) {
                if (stock <= 0) return 'out-of-stock';
                if (stock <= 5) return 'low-stock';
                return 'in-stock';
            }

            function getStockLabel(stock) {
                if (stock <= 0) return 'Out of Stock';
                if (stock <= 5) return 'Low Stock (' + stock + ' left)';
                return 'In Stock (' + stock + ')';
            }

            function getStockClass(stock) { return getStockStatus(stock); }

            function getCategoryIcon(category) {
                const map = {
                    'groceries': 'rice_bowl',
                    'dairy': 'no_drinks',
                    'beverages': 'local_drink',
                    'snacks': 'fastfood',
                    'personal-care': 'shower',
                    'household': 'cleaning_services'
                };
                return map[category] || 'inventory_2';
            }

            function getFilteredProducts() {
                let filtered = [...productsData];
                const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
                if (searchTerm) {
                    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category
                    .toLowerCase().includes(searchTerm));
                }
                const catVal = categoryFilter ? categoryFilter.value : 'all';
                if (catVal !== 'all') { filtered = filtered.filter(p => p.category === catVal); }
                const stockVal = stockFilter ? stockFilter.value : 'all';
                if (stockVal !== 'all') { filtered = filtered.filter(p => getStockStatus(p.stock) === stockVal); }
                const sortVal = sortFilter ? sortFilter.value : 'name-asc';
                switch (sortVal) {
                    case 'name-asc':
                        filtered.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'name-desc':
                        filtered.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case 'price-asc':
                        filtered.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-desc':
                        filtered.sort((a, b) => b.price - a.price);
                        break;
                }
                return filtered;
            }

            function renderProducts() {
                if (!grid) return;
                const filtered = getFilteredProducts();
                if (filtered.length === 0) {
                    grid.innerHTML =
                        `<div class="empty-products"><span class="material-symbols-outlined empty-icon">inventory_2</span><h4>No products found</h4><p>Try adjusting your filters or add a new product.</p></div>`;
                    return;
                }
                grid.innerHTML = filtered.map(p => {
                    const stockClass = getStockClass(p.stock);
                    const stockLabel = getStockLabel(p.stock);
                    const icon = p.icon || getCategoryIcon(p.category);
                    const isOutOfStock = p.stock <= 0;
                    return `<div class="product-card glass-card" data-id="${p.id}"><div class="product-img"><span class="material-symbols-outlined">${icon}</span></div><h4>${p.name}</h4><div class="product-category">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div><div class="price">₹${p.price.toLocaleString('en-IN')}</div><span class="stock-badge ${stockClass}">${stockLabel}</span><div class="card-actions"><button class="btn-add" data-id="${p.id}" ${isOutOfStock?'disabled':''}><span class="material-symbols-outlined" style="font-size:16px;">shopping_cart</span>${isOutOfStock?'Out of Stock':'Add to Cart'}</button><button class="btn-edit" data-id="${p.id}"><span class="material-symbols-outlined" style="font-size:16px;">edit</span></button></div></div>`;
                }).join('');
                document.querySelectorAll('.btn-add:not(:disabled)').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const id = parseInt(this.dataset.id);
                        const product = productsData.find(p => p.id === id);
                        if (product && window.udhar) window.udhar.showToast('Added "' + product.name +
                            '" to cart 🛒', 'shopping_cart');
                    });
                });
                document.querySelectorAll('.btn-edit').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const id = parseInt(this.dataset.id);
                        const product = productsData.find(p => p.id === id);
                        if (product && window.udhar) window.udhar.showToast('Editing "' + product.name +
                            '" (demo)', 'edit');
                    });
                });
                document.querySelectorAll('.product-card').forEach(card => {
                    card.addEventListener('click', function(e) {
                        if (e.target.closest('button')) return;
                        const id = parseInt(this.dataset.id);
                        const product = productsData.find(p => p.id === id);
                        if (product && window.udhar) window.udhar.showToast('Viewing details for "' +
                            product.name + '"', 'visibility');
                    });
                });
            }

            if (searchInput) searchInput.addEventListener('input', renderProducts);
            if (categoryFilter) categoryFilter.addEventListener('change', renderProducts);
            if (stockFilter) stockFilter.addEventListener('change', renderProducts);
            if (sortFilter) sortFilter.addEventListener('change', renderProducts);
            if (resetBtn) {
                resetBtn.addEventListener('click', function() {
                    if (searchInput) searchInput.value = '';
                    if (categoryFilter) categoryFilter.value = 'all';
                    if (stockFilter) stockFilter.value = 'all';
                    if (sortFilter) sortFilter.value = 'name-asc';
                    renderProducts();
                    if (window.udhar) window.udhar.showToast('Filters reset', 'refresh');
                });
            }

            document.getElementById('addProductBtn')?.addEventListener('click', function() {
                if (window.udhar) window.udhar.showToast('Add product form would open', 'add');
            });
            document.getElementById('exportProductsBtn')?.addEventListener('click', function() {
                if (window.udhar) window.udhar.showToast('Exporting products as CSV (demo)', 'download');
            });

            renderProducts();

        })();
    </script>

</body>
</html>
