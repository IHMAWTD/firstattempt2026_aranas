import { LitElement, html, css } from 'lit';

export class AlumniHub extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, sans-serif;
      --addu-blue: #081478;
      --addu-gold: #FFD700;
      --bg-light: #f1f5f9;
      --text-main: #1e293b;
      --white: #ffffff;
      background-color: var(--bg-light);
      min-height: 100vh;
      margin: 0;
    }

    /* Layout Containers */
    .app-container { display: flex; min-height: 100vh; }
    
    /* Login Screen Layout */
    .login-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, var(--addu-blue) 0%, #040a3d 100%);
    }

    .login-card {
      background: var(--white);
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }

    .brand-logo { width: 100px; margin-bottom: 1rem; }

    /* Sidebar Navigation */
    .sidebar {
      width: 260px;
      background: var(--addu-blue);
      color: white;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      box-shadow: 4px 0 10px rgba(0,0,0,0.1);
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 3rem;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .nav-item {
      padding: 12px 16px;
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
    }

    .nav-item:hover { background: rgba(255,255,255,0.1); color: white; }
    .nav-item.active { background: var(--white); color: var(--addu-blue); }

    /* Main Content Area */
    .main-content { flex: 1; padding: 2rem; overflow-y: auto; }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 1rem;
    }

    /* Professional UI Components */
    .card {
      background: var(--white);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      margin-bottom: 1.5rem;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .status-pending { background: #fef3c7; color: #92400e; }
    .status-ready { background: #dcfce7; color: #166534; }

    button {
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .btn-primary { background: var(--addu-blue); color: white; width: 100%; }
    .btn-primary:hover { opacity: 0.9; }

    input, select {
      width: 100%;
      padding: 12px;
      margin: 8px 0 16px 0;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      box-sizing: border-box;
    }

    /* Payment Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  `;

  static properties = {
    isLoggedIn: { type: Boolean },
    currentPage: { type: String },
    showPaymentModal: { type: Boolean }
  };

  constructor() {
    super();
    this.isLoggedIn = false;
    this.currentPage = 'dashboard';
    this.showPaymentModal = false;
  }

  render() {
    if (!this.isLoggedIn) return this.renderLogin();

    return html`
      <div class="app-container">
        <div class="sidebar">
          <div class="sidebar-brand">
            <img src="/knight.png" width="35" alt="Logo">
            <span>ALUMNI HUB</span>
          </div>
          
          <div class="nav-item ${this.currentPage === 'dashboard' ? 'active' : ''}" 
               @click=${() => this.currentPage = 'dashboard'}>🏠 Dashboard</div>
          <div class="nav-item ${this.currentPage === 'profile' ? 'active' : ''}" 
               @click=${() => this.currentPage = 'profile'}>👤 My Profile</div>
          <div class="nav-item ${this.currentPage === 'request' ? 'active' : ''}" 
               @click=${() => this.currentPage = 'request'}>📄 Request Document</div>
          <div class="nav-item ${this.currentPage === 'log' ? 'active' : ''}" 
               @click=${() => this.currentPage = 'log'}>📋 Document Log</div>
          
          <div style="margin-top: auto;" class="nav-item" @click=${() => this.isLoggedIn = false}>🚪 Sign Out</div>
        </div>

        <div class="main-content">
          <div class="header">
            <h1 style="font-size: 1.25rem; color: var(--addu-blue);">${this.getPageTitle()}</h1>
            <img src="/seal.png" width="40" alt="ADDU Seal">
          </div>

          ${this.renderCurrentPage()}
        </div>
      </div>

      ${this.showPaymentModal ? this.renderPaymentModal() : ''}
    `;
  }

  renderLogin() {
    return html`
      <div class="login-overlay">
        <div class="login-card">
          <img src="/knight.png" class="brand-logo" alt="Blue Knight">
          <h2 style="color: var(--addu-blue);">Blue Knight Portal</h2>
          <p style="color: #64748b; font-size: 0.9rem;">Please sign in to access the Alumni Hub</p>
          
          <input type="text" placeholder="Student ID / Email">
          <input type="password" placeholder="Password">
          
          <button class="btn-primary" @click=${() => this.isLoggedIn = true}>Access Portal</button>
          <p style="margin-top: 1.5rem; font-size: 0.8rem; color: #94a3b8;">Ateneo de Davao University Alumni Association</p>
        </div>
      </div>
    `;
  }

  renderCurrentPage() {
    switch(this.currentPage) {
      case 'dashboard':
        return html`
          <div class="card">
            <h3>Welcome back, Knight!</h3>
            <p>Your current graduation status is <b>Verified</b>. You have 1 pending document request.</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="card">
              <h4 style="margin:0">Active Requests</h4>
              <p style="font-size: 2rem; font-weight: 800; color: var(--addu-blue);">1</p>
            </div>
            <div class="card">
              <h4 style="margin:0">Cleared Payments</h4>
              <p style="font-size: 2rem; font-weight: 800; color: #166534;">12</p>
            </div>
          </div>
        `;
      case 'profile':
        return html`
          <div class="card">
            <h3 style="margin-top:0">Update Profile Information</h3>
            <label>Full Name</label><input type="text" value="Andre Aranas" disabled>
            <label>Current Address</label><input type="text" placeholder="Enter current address">
            <label>Contact Number</label><input type="text" placeholder="+63 9XX XXX XXXX">
            <button class="btn-primary" style="width: auto;">Save Changes</button>
          </div>
        `;
      case 'request':
        return html`
          <div class="card">
            <h3 style="margin-top:0">New Document Request</h3>
            <label>Document Type</label>
            <select>
              <option>Official Transcript of Records (TOR)</option>
              <option>Diploma (Duplicate)</option>
              <option>Honorable Dismissal</option>
            </select>
            <label>Purpose</label>
            <input type="text" placeholder="e.g., Employment, Graduate Studies">
            <button class="btn-primary" @click=${() => this.showPaymentModal = true}>Proceed to Payment</button>
          </div>
        `;
      case 'log':
        return html`
          <div class="card" style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; text-align: left;">
                  <th style="padding: 1rem;">Request ID</th>
                  <th style="padding: 1rem;">Document</th>
                  <th style="padding: 1rem;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 1rem;">REQ-2026-001</td>
                  <td style="padding: 1rem;">Transcript of Records</td>
                  <td style="padding: 1rem;"><span class="status-badge status-pending">Processing</span></td>
                </tr>
                <tr>
                  <td style="padding: 1rem;">REQ-2025-089</td>
                  <td style="padding: 1rem;">Honorable Dismissal</td>
                  <td style="padding: 1rem;"><span class="status-badge status-ready">Ready for Pickup</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
    }
  }

  renderPaymentModal() {
    return html`
      <div class="modal-overlay">
        <div class="login-card" style="max-width: 350px;">
          <h3 style="color: var(--addu-blue);">Scan to Pay</h3>
          <p style="font-size: 0.8rem;">Amount Due: ₱150.00</p>
          <div style="background: #eee; width: 200px; height: 200px; margin: 1rem auto; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #666; border: 2px dashed #ccc;">
            [QR CODE PLACEHOLDER]
          </div>
          <button class="btn-primary" @click=${() => { this.showPaymentModal = false; this.currentPage = 'log'; }}>Done / Verify</button>
          <button style="background:none; color: #64748b; margin-top: 10px;" @click=${() => this.showPaymentModal = false}>Cancel</button>
        </div>
      </div>
    `;
  }

  getPageTitle() {
    const titles = { dashboard: 'Dashboard', profile: 'Personal Information', request: 'Document Request Flow', log: 'Document Tracking Log' };
    return titles[this.currentPage];
  }
}

customElements.define('alumni-hub', AlumniHub);